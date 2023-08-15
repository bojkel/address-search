import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {findAddressCandidates, suggestAddress} from "../../utils/api/address.api";
import {Observable} from "rxjs";
import {Suggestion} from "../models/suggestion.model";
import {AddressSuggestions} from "../models/address-suggestions.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getAddressCandidates(searchCriteria: string | null): Observable<AddressSuggestions> {
    return this.httpClient.get<any>(findAddressCandidates(searchCriteria));
  }

  public getAddressSuggestions(suggestion: string | null): Observable<Suggestion[]> {
    return this.httpClient.get<any>(suggestAddress(suggestion));
  }
}
