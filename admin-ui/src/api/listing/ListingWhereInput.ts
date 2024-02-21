import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";

export type ListingWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  listingCreatedBy?: UserWhereUniqueInput;
  locationData?: JsonFilter;
  locationType?: StringFilter;
  mapData?: StringFilter;
  photos?: JsonFilter;
  placeAmenities?: JsonFilter;
  placeSpace?: StringFilter;
  placeType?: StringFilter;
  price?: FloatFilter;
  title?: StringFilter;
  wishlists?: WishlistListRelationFilter;
};
