import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { WishlistCreateNestedManyWithoutListingsInput } from "./WishlistCreateNestedManyWithoutListingsInput";

export type ListingCreateInput = {
  description: string;
  listingCreatedBy: UserWhereUniqueInput;
  locationData: InputJsonValue;
  locationType: string;
  mapData: string;
  photos: InputJsonValue;
  placeAmenities: InputJsonValue;
  placeSpace: string;
  placeType: string;
  price: number;
  title: string;
  wishlists?: WishlistCreateNestedManyWithoutListingsInput;
};
