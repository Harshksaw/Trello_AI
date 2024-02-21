import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { WishlistUpdateManyWithoutListingsInput } from "./WishlistUpdateManyWithoutListingsInput";

export type ListingUpdateInput = {
  description?: string;
  listingCreatedBy?: UserWhereUniqueInput;
  locationData?: InputJsonValue;
  locationType?: string;
  mapData?: string;
  photos?: InputJsonValue;
  placeAmenities?: InputJsonValue;
  placeSpace?: string;
  placeType?: string;
  price?: number;
  title?: string;
  wishlists?: WishlistUpdateManyWithoutListingsInput;
};
