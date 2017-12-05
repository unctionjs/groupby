# @unction/groupBy

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> (RecordType -> KeyType) -> ListType<RecordType> -> RecordType<ListType<RecordType>>

Creates a record tree where the key is a computation on the value and the value is a list of the values that match with that computation.

``` javascript
groupBy(
  key("type")
)([
  {
    id: "aaa",
    name: "Kurtis Rainbolt-Greene",
    type: "person",
  },
  {
    id: "bbb",
    name: "Angela Rainbolt-Greene",
    type: "person",
  },
])
```

Which returns:

``` javascript
{
  person: [
    {
      id: "aaa",
      name: "Kurtis Rainbolt-Greene",
      type: "person",
    },
    {
      id: "bbb",
      name: "Angela Rainbolt-Greene",
      type: "person",
    },
  ],
}
```

``` javascript
groupBy(
  key("type")
)(
  new Set([
    new Map([
      ["id", "aaa"],
      ["name", "Kurtis Rainbolt-Greene"]
      ["type", "person"],
    ]),
    new Map([
      ["id", "bbb"],
      ["name", "Angela Rainbolt-Greene"]
      ["type", "person"],
    ])
  ])
)
```

Which returns:

``` javascript
new Map([
  ["person", new Set([
    new Map([
      ["id", "aaa"],
      ["name", "Kurtis Rainbolt-Greene"],
      ["type", "person"],
    ]),
    new Map([
      ["id", "bbb"],
      ["name", "Angela Rainbolt-Greene"],
      ["type", "person"],
    ])
  ])],
])
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/groupBy.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/groupBy.svg?maxAge=2592000&style=flat-square
