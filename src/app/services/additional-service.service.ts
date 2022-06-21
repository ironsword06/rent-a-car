import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdditionalServiceModel } from '../models/additionalServiceModel';

@Injectable({
  providedIn: 'root'
})
export class AdditionalService{

  constructor(private httpClient:HttpClient) { }
  getAdditionalServices(): Observable<AdditionalServiceModel[]> {
    return this.httpClient.get<AdditionalServiceModel[]>(
      'http://localhost:3000/additionalServices'
    );
  }

  getAdditionalServiceById(
    additionalServiceId: number
  ): Observable<AdditionalServiceModel> {
    return this.httpClient.get<AdditionalServiceModel>(
      'http://localhost:3000/additionalServices/' + additionalServiceId
    );
  }
}
