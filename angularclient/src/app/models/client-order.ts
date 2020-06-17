import { Client } from './client';

export class ClientOrder {
    id: number;
    client: Client;
    orderDate: string;
    clientOrderItems: any

    constructor (
          id?: number,
          orderDate?: string,
          client?: Client,
          clientOrderItems?: any
        ) {
          this.id = id;
          this.orderDate = orderDate;
          this.client = client;
          this.clientOrderItems = clientOrderItems;
        }
}
