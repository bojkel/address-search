import {AddressExtent} from "./address-extent.model";
import {AddressLocation} from "./address-location.model";

export interface AddressCandidate {
  address: string,
  attributes: AddressExtent,
  location: AddressLocation,
  score: number,
}
