import { Ordered } from "./$types";
declare const min: min_00;
type min_00 = {
    /**
     * Returns the smaller of its two arguments.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Relation
     * @sig Ord a => a -> a -> a
     * @param {*} a
     * @param {*} b
     * @return {*}
     * @see R.minBy, R.max
     * @example
     *
     *      R.min(789, 123); //=> 123
     *      R.min('a', 'b'); //=> 'a'
     */
    <T extends Ordered>(a: T): min_10<T>;
    <T extends Ordered>(a: T, b: T): min_11<T>;
};
type min_10<T extends Ordered> = {
    (b: T): min_11<T>;
};
type min_11<T extends Ordered> = T;
export = min;
