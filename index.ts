import mergeRight from "@unction/mergeright";
import reduceValues from "@unction/reducevalues";
import fresh from "@unction/fresh";
import of from "@unction/of";
import get from "@unction/get";
import {ListType} from "./types";
import {MapperFunctionType} from "./types";

export default function groupBy<A, B> (unction: MapperFunctionType<A, B>) {
  return function groupByUnction (list: ListType<A>): Map<B, ListType<A>> {
    return reduceValues(
      (accumulated: Map<B, ListType<A>>) => (value: A) => mergeRight(
        accumulated
      )(
        of(
          unction(value)
        )(
          mergeRight(
            get(unction(value))(accumulated) || fresh(list)
          )(
            of(null)(value)(fresh(list))
          )
        )(accumulated)
      )
    )(
      fresh(new Map())
    )(
      list
    );
  };
}
