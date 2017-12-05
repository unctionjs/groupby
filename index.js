import mergeRight from "@unction/mergeright"
import reduceValues from "@unction/reducevalues"
import fresh from "@unction/fresh"
import of from "@unction/of"
import key from "@unction/key"
import first from "@unction/first"

export default function groupBy (unction: RecordType => KeyType): UnaryFunctionType {
  return function groupByUnction (list: ListType<RecordType>): RecordType<ListType<RecordType>> {
    const sampling: RecordType = first(Array.from(list))

    return reduceValues(
      (accumulated: RecordType<ListType<RecordType>>): UnaryFunctionType =>
        (value: ValueType): RecordType<ListType<RecordType>> =>
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
      fresh(sampling)
    )(
      list
    )
  }
}
