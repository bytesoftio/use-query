# @bytesoftio/use-query

## Installation

`yarn add @bytesoftio/use-query` or `npm install @bytesoftio/use-query`

## Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Description](#description)
- [Usage](#usage)
  - [useQuery](#usequery)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Description

This package provides a convenient way working with url query segments, when using `react-router`. You don't have to
build a valid querystring anymore, whenever you want to update a query param, for example during sorting, filtering, 
pagination and other deep linking related stuff.

## Usage

### useQuery

Hook into any query param you want, right inside your React component. Updating a query param in the url is as easy
as a regular `setState`. Defining default values for each query param saves you some boilerplate code.

```tsx
import React from "react"
import { useQuery } from "@bytesoftio/use-query"

const Component = () => {
  // hook into multiple query params and provide default values 
  const [query, setQuery] = useQuery({ page: 1, order: "asc" })
  
  const goToPage3 = () => setQuery({ page: 3 })
  const toggleSorting = () => setQuery({ order: query.order === "asc" ? "desc" : "asc" })
  
  return (
    <div>
      <button onClick={toggleSorting}>Change sorting order</button> 
      <button onClick={goToPage3}>Go to 3rd page</button>
    </div>
  )
}
```