import {AddressCandidate} from "./address-candidate.model";
import {SpatialReference} from "./spatial-reference.model";

export interface AddressSuggestions {
  candidates: AddressCandidate[],
  spatialReference: SpatialReference,
}
