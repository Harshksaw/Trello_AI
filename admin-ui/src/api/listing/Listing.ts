import { User } from "../user/User";
import { JsonValue } from "type-fest";
import { Wishlist } from "../wishlist/Wishlist";

export type Listing = {
  createdAt: Date;
  description: string;
  id: string;
  listingCreatedBy?: User;
  locationData: JsonValue;
  locationType: string;
  mapData: string;
  photos: JsonValue;
  placeAmenities: JsonValue;
  placeSpace: string;
  placeType: string;
  price: number;
  title: string;
  updatedAt: Date;
  wishlists?: Array<Wishlist>;
};
