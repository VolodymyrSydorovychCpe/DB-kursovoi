import { Vendor } from './vendor';

export class VendorOrder {
    id: number;
    orderDate: string;
    vendor: Vendor;
    vendorOrderItems: any

    constructor (
          id?: number,
          orderDate?: string,
          vendor?: Vendor,
          vendorOrderItems?: any
        ) {
          this.id = id;
          this.orderDate = orderDate;
          this.vendor = vendor;
          this.vendorOrderItems = vendorOrderItems;
        }
}
