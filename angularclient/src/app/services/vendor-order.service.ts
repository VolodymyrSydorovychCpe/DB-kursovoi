import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VendorOrder } from '../models/vendor-order';
import { Vendor } from '../models/vendor';
import { Medecine } from '../models/medecine';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class VendorOrderService {

  private vendorOrderListUrl: string;
  private vendorOrdersUrl: string;

  constructor(private http: HttpClient) {
    this.vendorOrderListUrl = 'http://localhost:9090/vendor-order-list';
    this.vendorOrdersUrl = 'http://localhost:9090/vendor-orders';
  }

  public findAll(): Observable<VendorOrder[]> {
    return this.http.get(this.vendorOrderListUrl)
        .map((data: any) => {
          var orders = data._embedded['vendor-orders'];
          orders.forEach(vendorOrder => {
            this.http.get<Vendor>(vendorOrder._links.vendor.href).subscribe(
                        result => {
                        vendorOrder.vendor = new Vendor(Number(result.id), result.name, result.address);
                  });
            });
          return orders;
        });

  }

  public save(vendorOrder: VendorOrder) {
    var vendorOrderItems = {};

    vendorOrder.vendorOrderItems.forEach((count, medicine) =>
              vendorOrderItems[JSON.stringify(new Medecine(Number(medicine.id), medicine.name,
                                                medicine.composition, medicine.manufacturer,
                                                medicine.medecineGroup))]
                                            = Number(count));

    vendorOrder.vendorOrderItems = vendorOrderItems;

    return this.http.post<VendorOrder>(this.vendorOrdersUrl, vendorOrder);
  }

  public get(id: number) {
    return this.http.get(this.vendorOrderListUrl + '/' + id)
            .map((data: any) => {
              var vendorOrder = new VendorOrder(Number(data.id), data.orderDate, null, data.vendorOrderItems);

              vendorOrder.vendorOrderItems = new Map();

              Object.entries(data.vendorOrderItems).forEach( ([key, value]) => {
                            vendorOrder.vendorOrderItems
                                          .set(new Medecine(Number(JSON.parse(key).id), JSON.parse(key).name, JSON.parse(key).composition), Number(value));
                      });

              this.http.get<Vendor>(data._links.vendor.href).subscribe(
                                      result => {
                                      vendorOrder.vendor = new Vendor(Number(result.id), result.name, result.address);
                                });
              return vendorOrder;
            });
  }

  public delete(id: number) {
    return this.http.delete<VendorOrder>(this.vendorOrderListUrl + '/' + id);
  }

  public update(vendorOrder: VendorOrder) {
    return this.http.post<VendorOrder>(this.vendorOrdersUrl, vendorOrder);
  }
}
