import {Component, ViewEncapsulation} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {AddressSuggestions} from "../../models/address-suggestions.model";
import {FormControl, Validators} from "@angular/forms";
import {Suggestion} from "../../models/suggestion.model";

@Component({
  selector: 'app-search-address',
  templateUrl: './search-address.component.html',
  styleUrls: ['./search-address.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchAddressComponent {

  addressCandidates: AddressSuggestions | undefined;
  addressFormControl: FormControl<string | null> = new FormControl('', [Validators.required]);
  addressSuggestions!: Suggestion[];
  loading: boolean = true;

  constructor(private apiService: ApiService) {}

  getAddressCandidates(): void {
    this.apiService.getAddressCandidates(this.addressFormControl.value).subscribe(data => {
      if (data) {
        this.addressCandidates = data;
        this.loading = false;
      }
      console.log('Search criteria: ', this.addressFormControl.value);
      console.log('These are the address candidates: ', this.addressCandidates?.candidates);
    });
  }

  getAddressSuggestions(): void {
    this.apiService.getAddressSuggestions(this.addressFormControl.value)
      .subscribe(suggestions => {
        this.addressSuggestions = suggestions;
        console.log('suggestions: ', suggestions);
    });
  }

  resetAddressSearch(): void {
    this.addressFormControl.reset();
    this.addressCandidates = undefined;
  }

  isAddressValid(): boolean {
    if (this.addressCandidates?.candidates!.length === 0 && this.addressFormControl.valid) return false;
    else return true;
  }
}
