import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripCreateInput = {
  tripinfo: InputJsonValue;
  user: UserWhereUniqueInput;
};
