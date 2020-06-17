import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Manufacturer } from '../models/manufacturer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class ManufacturerService {

  private manufacturersUrl: string;

  constructor(private http: HttpClient) {
    this.manufacturersUrl = 'http://localhost:9090/manufacturers';
  }

  public findAll(): Observable<Manufacturer[]> {
    return this.http.get(this.manufacturersUrl)
        .map((data: any) => {
          return data._embedded.manufacturers as Manufacturer[];
        });
  }

  public save(manufacturer: Manufacturer) {
    return this.http.post<Manufacturer>(this.manufacturersUrl, manufacturer);
  }

  public get(id: number) {
    return this.http.get<Manufacturer>(this.manufacturersUrl + '/' + id);
  }

  public delete(id: number) {
    return this.http.delete<Manufacturer>(this.manufacturersUrl + '/' + id);
  }

  public update(manufacturer: Manufacturer) {
    return this.http.post<Manufacturer>(this.manufacturersUrl, manufacturer);
  }
}
