import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorOrder } from '../../models/vendor-order';
import { Vendor } from '../../models/vendor';
import { VendorOrderService } from '../../services/vendor-order.service';

@Component({
  selector: 'app-vendor-order-list',
  templateUrl: './vendor-order-list.component.html',
  styleUrls: ['./vendor-order-list.component.css']
})
export class VendorOrderListComponent implements OnInit {

  vendorOrders: VendorOrder[];
  vendorOrderMap: Map<number, VendorOrder>;

  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private vendorOrderService: VendorOrderService) {
  }

  ngOnInit() {
    this.updateVendorOrderList();
    this.vendorOrderMap = new Map();
  }

  onDelete(id: number) {
    this.vendorOrderService.delete(id).subscribe(result => this.updateVendorOrderList());
  }

  onUpdate(id: number, orderDate: string) {

    var updatedVendorOrder = this.vendorOrderMap.get(Number(id));
    updatedVendorOrder.orderDate = orderDate;


    //var updatedVendorOrder = new VendorOrder(id, orderDate, new Vendor(vendorId, vendorName, vendorAddress));
    console.log(updatedVendorOrder);
    this.vendorOrderService.update(updatedVendorOrder).subscribe(result => this.updateVendorOrderList());
  }

  updateVendorOrderList() {
    this.vendorOrderService.findAll().subscribe(data => {
            this.vendorOrders = data;
            this.vendorOrderMap = new Map();
            this.vendorOrders.forEach(vendorOrder => this.vendorOrderMap.set(vendorOrder.id, vendorOrder));
          });
  }
}
