/* eslint-disable flowtype/require-return-type */
import {test} from "tap"
import key from "@unction/key"

import groupBy from "./index"

test("Single Object Array", ({same, end}) => {
  same(
    groupBy(
      key("category")
    )(
      [
        {
          name: "Hotdog",
          category: "sandwich",
        },
      ]
    ),
    new Map([
      ["sandwich", [
        {
          name: "Hotdog",
          category: "sandwich",
        },
      ]],
    ])
  )

  end()
})

test("Multiple Object Array", ({same, end}) => {
  same(
    groupBy(
      key("category")
    )(
      [
        {
          name: "Hotdog",
          category: "sandwich",
        },
        {
          name: "Club Sandwich",
          category: "sandwich",
        },
      ]
    ),
    new Map([
      ["sandwich", [
        {
          name: "Hotdog",
          category: "sandwich",
        },
        {
          name: "Club Sandwich",
          category: "sandwich",
        },
      ]],
    ])
  )

  end()
})

// Tap is broken right now :( https://github.com/tapjs/tsame/issues/1
// test("Multiple Map Set", ({same, end}) => {
//   same(
//     groupBy(
//       key("category")
//     )(
//       new Set([
//         new Map([
//           [
//             "name",
//             "Hotdog",
//           ],
//           [
//             "category",
//             "sandwich",
//           ],
//         ]),
//         new Map([
//           [
//             "name",
//             "Club Sandwich",
//           ],
//           [
//             "category",
//             "sandwich",
//           ],
//         ]),
//       ])
//     ),
//     new Map([
//       [
//         "sandwich",
//         new Set([
//           new Map([
//             [
//               "name",
//               "Hotdog",
//             ],
//             [
//               "category",
//               "sandwich",
//             ],
//           ]),
//           new Map([
//             [
//               "name",
//               "Club Sandwich",
//             ],
//             [
//               "category",
//               "sandwich",
//             ],
//           ]),
//         ]),
//       ],
//     ])
//   )
//
//   end()
// })
