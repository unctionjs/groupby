
import {test} from "tap";
import get from "@unction/get";

import groupBy from "./";

test("Single Object Array", ({same, end}) => {
  same(
    groupBy(
      get("category")
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
  );

  end();
});

test("Multiple Object Array", ({same, end}) => {
  same(
    groupBy(
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
  );

  end();
});

// Tap is broken right now :( https://github.com/tapjs/tsame/issues/1
test("Multiple Map Set", ({same, end}) => {
  same(
    groupBy(
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
    ),
    new Map([
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
    ])
  );

  end();
});
