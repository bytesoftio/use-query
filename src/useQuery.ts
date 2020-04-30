import { useHistory } from "react-router"
import qs from "qs"
import { pickBy } from "lodash"
import { UseQuery } from "./types"

export const useQuery: UseQuery = (initialState) => {
  const history = useHistory()
  const queryString = history.location.search
  const query = { ...initialState, ...qs.parse(queryString, { ignoreQueryPrefix: true }) }

  const setQuery = (state) => {
    const newQuery = pickBy({ ...query, ...state }, (value) => ! [undefined, null, 0, ""].includes(value))
    const newQueryString = qs.stringify(newQuery)

    history.push({ search: newQueryString })
  }

  return [query, setQuery]
}