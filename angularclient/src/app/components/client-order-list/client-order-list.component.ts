import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientOrder } from '../../models/client-order';
import { Client } from '../../models/client';
import { ClientOrderService } from '../../services/client-order.service';

@Component({
  selector: 'app-client-order-list',
  templateUrl: './client-order-list.component.html',
  styleUrls: ['./client-order-list.component.css']
})
export class ClientOrderListComponent implements OnInit {

  clientOrders: ClientOrder[];

  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private clientOrderService: ClientOrderService) {
  }

  ngOnInit() {
    this.updateClientOrderList();
  }

  onDelete(id: number) {
    this.clientOrderService.delete(id).subscribe(result => this.updateClientOrderList());
  }

  onUpdate(id: number, orderDate: string, clientId: string, clientName: string, clientAddress: string) {
    var updatedClientOrder = new ClientOrder(Number(id), orderDate, new Client(Number(clientId), clientName, clientAddress));
    this.clientOrderService.update(updatedClientOrder).subscribe(result => this.updateClientOrderList());
  }

  updateClientOrderList() {
    this.clientOrderService.findAll().subscribe(data => {
            this.clientOrders = data;
          });
  }
}
