# @unction/groupBy

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> MapperFunctionType<A, B> => Array<A> | Set<A> => Map<B, Array<A> | Set<A>>

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
Map {
  "person" => [
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
  Set [
    Map {
      "id" => "aaa",
      "name" => "Kurtis Rainbolt-Greene"
      "type" => "person",
    },
    Map {
      "id" => "bbb",
      "name" => "Angela Rainbolt-Greene"
      "type" => "person",
    }
  ]
)
```

Which returns:

``` javascript
Map {
  "person" => Set [
    Map {
      "id" => "aaa",
      "name" => "Kurtis Rainbolt-Greene",
      "type" => "person",
    },
    Map {
      "id" => "bbb",
      "name" => "Angela Rainbolt-Greene",
      "type" => "person",
    }
  ],
}
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/groupBy.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/groupBy.svg?maxAge=2592000&style=flat-square
