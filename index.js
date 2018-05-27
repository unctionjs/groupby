import mergeRight from "@unction/mergeright";
import reduceValues from "@unction/reducevalues";
import fresh from "@unction/fresh";
import of from "@unction/of";
import key from "@unction/key";
export default function groupBy(unction) {
  return function groupByUnction(list) {
    return reduceValues(accumulated => value => mergeRight(accumulated)(of(unction(value))(mergeRight(key(unction(value))(accumulated) || fresh(list))(of(null)(value)(fresh(list))))(accumulated)))(fresh(new Map()))(list);
  };
}
