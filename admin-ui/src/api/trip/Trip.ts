import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Trip = {
  createdAt: Date;
  id: string;
  tripinfo: JsonValue;
  updatedAt: Date;
  user?: User;
};
