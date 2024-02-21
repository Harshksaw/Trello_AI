import { SortOrder } from "../../util/SortOrder";

export type TripOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  tripinfo?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
