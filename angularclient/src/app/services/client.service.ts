import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../models/client';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class ClientService {

  private clientsUrl: string;

  constructor(private http: HttpClient) {
    this.clientsUrl = 'http://localhost:9090/clients';
  }

  public findAll(): Observable<Client[]> {
    return this.http.get(this.clientsUrl)
        .map((data: any) => {
          return data._embedded.clients as Client[];
        });
  }

  public save(client: Client) {
    return this.http.post<Client>(this.clientsUrl, client);
  }

  public get(id: number) {
    //return this.http.get<Client>(this.clientsUrl + '/' + id);

    return this.http.get(this.clientsUrl + '/' + id)
            .map((data: any) => {
              return new Client(data.id, data.name, data.address);
            });
  }

  public delete(id: number) {
    return this.http.delete<Client>(this.clientsUrl + '/' + id);
  }

  public update(client: Client) {
    return this.http.post<Client>(this.clientsUrl, client);
  }
}
