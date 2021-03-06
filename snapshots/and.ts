import * as R from '../ramda/dist/index';

declare const string: string;
declare const number: number;

// @dts-jest:pass:snap -> string | number
R.and(string)(number);
// @dts-jest:pass:snap -> string | number
R.and(string, number);
