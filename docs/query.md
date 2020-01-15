# Query Schema

```txt
https://ns.adobe.com/helix/shared/query
```

A named query that can be run against an index


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                    |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [query.schema.json](query.schema.json "open original schema") |

## Query Type

`object` ([Query](query.md))

# Query Properties

| Property                    | Type          | Required | Nullable       | Defined by                                                                                                      |
| :-------------------------- | ------------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------- |
| [select](#select)           | Not specified | Optional | cannot be null | [Query](query-properties-select.md "https&#x3A;//ns.adobe.com/helix/shared/query#/properties/select")           |
| [hitsPerPage](#hitsPerPage) | `integer`     | Optional | cannot be null | [Query](query-properties-hitsperpage.md "https&#x3A;//ns.adobe.com/helix/shared/query#/properties/hitsPerPage") |
| [cache](#cache)             | `integer`     | Optional | cannot be null | [Query](query-properties-cache.md "https&#x3A;//ns.adobe.com/helix/shared/query#/properties/cache")             |
| [parameters](#parameters)   | `array`       | Optional | cannot be null | [Query](query-properties-parameters.md "https&#x3A;//ns.adobe.com/helix/shared/query#/properties/parameters")   |
| [filters](#filters)         | `string`      | Optional | cannot be null | [Query](query-properties-filters.md "https&#x3A;//ns.adobe.com/helix/shared/query#/properties/filters")         |

## select

The base query to run


`select`

-   is optional
-   Type: unknown
-   cannot be null
-   defined in: [Query](query-properties-select.md "https&#x3A;//ns.adobe.com/helix/shared/query#/properties/select")

### select Type

unknown

### select Default Value

The default value is:

```json
"*"
```

## hitsPerPage

How many hits each page of search results should contain


`hitsPerPage`

-   is optional
-   Type: `integer`
-   cannot be null
-   defined in: [Query](query-properties-hitsperpage.md "https&#x3A;//ns.adobe.com/helix/shared/query#/properties/hitsPerPage")

### hitsPerPage Type

`integer`

### hitsPerPage Constraints

**minimum**: the value of this number must greater than or equal to: `1`

### hitsPerPage Default Value

The default value is:

```json
25
```

## cache

How long (in seconds) search results should be cached on the CDN


`cache`

-   is optional
-   Type: `integer`
-   cannot be null
-   defined in: [Query](query-properties-cache.md "https&#x3A;//ns.adobe.com/helix/shared/query#/properties/cache")

### cache Type

`integer`

## parameters

Which URL parameters to accept in the query when served on the web


`parameters`

-   is optional
-   Type: `string[]`
-   cannot be null
-   defined in: [Query](query-properties-parameters.md "https&#x3A;//ns.adobe.com/helix/shared/query#/properties/parameters")

### parameters Type

`string[]`

### parameters Default Value

The default value is:

```json
[]
```

## filters

An ES6 template expression that determines which filters to apply


`filters`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Query](query-properties-filters.md "https&#x3A;//ns.adobe.com/helix/shared/query#/properties/filters")

### filters Type

`string`