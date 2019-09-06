
import get from "@unction/get";

import groupBy from "./index";

test("Single Object Array", () => {
  expect(groupBy(
    get("category")
  )(
    [
      {
        name: "Hotdog",
        category: "sandwich",
      },
    ]
  )).toEqual(new Map([
    ["sandwich", [
      {
        name: "Hotdog",
        category: "sandwich",
      },
    ]],
  ]));
});

test("Multiple Object Array", () => {
  expect(groupBy(
    get("category")
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
  )).toEqual(new Map([
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
  ]));
});

// Tap is broken right now :( https://github.com/tapjs/tsame/issues/1
test("Multiple Map Set", () => {
  expect(groupBy(
    get("category")
  )(
    new Set([
      new Map([
        [
          "name",
          "Hotdog",
        ],
        [
          "category",
          "sandwich",
        ],
      ]),
      new Map([
        [
          "name",
          "Club Sandwich",
        ],
        [
          "category",
          "sandwich",
        ],
      ]),
    ])
  )).toEqual(new Map([
    [
      "sandwich",
      new Set([
        new Map([
          [
            "name",
            "Hotdog",
          ],
          [
            "category",
            "sandwich",
          ],
        ]),
        new Map([
          [
            "name",
            "Club Sandwich",
          ],
          [
            "category",
            "sandwich",
          ],
        ]),
      ]),
    ],
  ]));
});
