import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClientOrder } from '../models/client-order';
import { Medecine } from '../models/medecine';
import { Client } from '../models/client';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class ClientOrderService {

  private clientOrderListUrl: string;
  private clientOrdersUrl: string;

  constructor(private http: HttpClient) {
    this.clientOrderListUrl = 'http://localhost:9090/client-order-list';
    this.clientOrdersUrl = 'http://localhost:9090/client-orders';
  }

  public findAll(): Observable<ClientOrder[]> {
    return this.http.get(this.clientOrderListUrl)
        .map((data: any) => {
          var orders = data._embedded['client-orders'];
          orders.forEach(clientOrder => {
            this.http.get<Client>(clientOrder._links.client.href).subscribe(
                        result => {
                        clientOrder.client = result;
                  });
            });
          return orders;
        });

  }

  public save(clientOrder: ClientOrder) {

      var clientOrderItems = {};
  
      clientOrder.clientOrderItems.forEach((count, medicine) =>
                clientOrderItems[JSON.stringify(new Medecine(medicine.id, medicine.name,
                                                  medicine.composition, medicine.manufacturer,
                                                  medicine.medecineGroup))]
                                              = Number(count));
  
      clientOrder.clientOrderItems = clientOrderItems;
  
  
    return this.http.post<ClientOrder>(this.clientOrdersUrl, clientOrder);
  }

  public get(id: number) {
    return this.http.get(this.clientOrderListUrl + '/' + id)
                .map((data: any) => {
                  var clientOrder = new ClientOrder(Number(data.id), data.orderDate, null, new Map());

                  Object.entries(data.clientOrderItems).forEach( ([key, value]) => {
                                clientOrder.clientOrderItems
                                              .set(new Medecine(Number(JSON.parse(key).id), JSON.parse(key).name, JSON.parse(key).composition), Number(value));
                          });

                  this.http.get<Client>(data._links.client.href).subscribe(
                                          result => {
                                          clientOrder.client = new Client(Number(result.id), result.name, result.address);
                                    });
                  return clientOrder;
                });
  }

  public delete(id: number) {
    return this.http.delete<ClientOrder>(this.clientOrderListUrl + '/' + id);
  }

  public update(clientOrder: ClientOrder) {
    return this.http.post<ClientOrder>(this.clientOrdersUrl, clientOrder);
  }
}
