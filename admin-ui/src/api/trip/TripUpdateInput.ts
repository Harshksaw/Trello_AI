import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripUpdateInput = {
  tripinfo?: InputJsonValue;
  user?: UserWhereUniqueInput;
};
