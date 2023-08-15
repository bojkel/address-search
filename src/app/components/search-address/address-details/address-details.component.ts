import {Component, Input} from '@angular/core';
import {AddressCandidate} from "../../../models/address-candidate.model";


@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss']
})
export class AddressDetailsComponent {

  @Input() array!: AddressCandidate[];

}
