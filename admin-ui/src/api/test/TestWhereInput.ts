import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TestWhereInput = {
  here?: DateTimeNullableFilter;
  id?: StringFilter;
};
