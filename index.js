import mergeRight from "@unction/mergeright"
import reduceValues from "@unction/reducevalues"
import fresh from "@unction/fresh"
import of from "@unction/of"
import key from "@unction/key"

import type {EnumerableType} from "types"
import type {KeyType} from "types"
import type {ValueType} from "types"
import type {UnaryFunctionType} from "types"
import type {MapType} from "types"

export default function groupBy (unction: EnumerableType<ValueType> => KeyType): UnaryFunctionType<*, *> {
  return function groupByUnction (list: EnumerableType<ValueType>): MapType<KeyType, EnumerableType<ValueType>> {
    return reduceValues(
      (accumulated: MapType<KeyType, EnumerableType<ValueType>>): UnaryFunctionType<*, *> =>
        (value: ValueType): MapType<KeyType, EnumerableType<ValueType>> =>
          mergeRight(
            accumulated
          )(
            of(
              unction(value)
            )(
              mergeRight(
                key(unction(value))(accumulated) || fresh(list)
              )(
                of(
                  null
                )(
                  value
                )(
                  fresh(list)
                )
              )
            )(
              accumulated
            )
          )
    )(
      fresh(new Map())
    )(
      list
    )
  }
}
