import mergeRight from "@unction/mergeright";
import reduceValues from "@unction/reducevalues";
import fresh from "@unction/fresh";
import of from "@unction/of";
import get from "@unction/get";

import {MapperFunctionType} from "./types";

export default function groupBy<A, B> (unction: MapperFunctionType<A, B>) {
  return function groupByUnction (list: Array<A> | Set<A>): Map<B, Array<A> | Set<A>> {
    return reduceValues(
      (accumulated: Map<B, Array<A> | Set<A>>) => (value: A) => mergeRight(
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
