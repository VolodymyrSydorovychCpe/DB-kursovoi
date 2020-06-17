import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vendor } from '../models/vendor';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class VendorService {

  private vendorsUrl: string;

  constructor(private http: HttpClient) {
    this.vendorsUrl = 'http://localhost:9090/vendors';
  }

  public findAll(): Observable<Vendor[]> {
    return this.http.get(this.vendorsUrl)
        .map((data: any) => {
          return data._embedded.vendors as Vendor[];
        });
  }

  public save(vendor: Vendor) {
    return this.http.post<Vendor>(this.vendorsUrl, vendor);
  }

  public get(id: number) {
    return this.http.get<Vendor>(this.vendorsUrl + '/' + id);
  }

  public delete(id: number) {
    return this.http.delete<Vendor>(this.vendorsUrl + '/' + id);
  }

  public update(vendor: Vendor) {
    return this.http.post<Vendor>(this.vendorsUrl, vendor);
  }
}

