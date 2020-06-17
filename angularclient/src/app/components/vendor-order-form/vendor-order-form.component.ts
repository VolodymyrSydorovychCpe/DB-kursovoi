import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorOrderService } from '../../services/vendor-order.service';
import { VendorService } from '../../services/vendor.service';
import { MedecineService } from '../../services/medecine.service';
import { VendorOrder } from '../../models/vendor-order';
import { Vendor } from '../../models/vendor';
import { Medecine } from '../../models/medecine';

@Component({
  selector: 'app-vendor-order-form',
  templateUrl: './vendor-order-form.component.html',
  styleUrls: ['./vendor-order-form.component.css']
})
export class VendorOrderFormComponent implements OnInit {

  vendorOrder: VendorOrder;
  vendors: Vendor[];
  medicines: Medecine[];
  medicineMap: Map<number, Medecine>;

  selectedMedicineMap: Map<number, Object>;
  selectedMedicineList: any[];

  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private vendorOrderService: VendorOrderService,
              private vendorService: VendorService,
              private medicineService: MedecineService) {
    this.vendorOrder = new VendorOrder();
    this.medicineMap = new Map();
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
                if (params.id) {
                      this.vendorOrderService.get(Number(params.id))
                                    .subscribe(data => this.vendorOrder = data);
                }
              });

    this.vendorService.findAll().subscribe(data => this.vendors = data);

    this.medicineService.findAll().subscribe(data => {
                this.medicines = data;
                this.medicines.forEach(medicine => this.medicineMap.set(Number(medicine.id), medicine));
              });
  }

  onAddMedicine(sMedicineId: number, sMedicineCount: number) {
    if (!this.selectedMedicineMap) {
      this.initMedicineMap();
    }

    var medicineCountPair = {'medicine' : this.medicineMap.get(Number(sMedicineId)), 'count' : sMedicineCount};
    this.selectedMedicineMap.set(Number(sMedicineId), medicineCountPair);
    this.selectedMedicineList = Array.from(this.selectedMedicineMap.values());
  }

  onSubmit() {
    this.vendorOrder.vendorOrderItems = new Map();
    this.selectedMedicineList.forEach(orderItem => this.vendorOrder.vendorOrderItems.set(orderItem.medicine, orderItem.count));
    this.vendorOrderService.save(this.vendorOrder).subscribe(result => this.gotoVendorOrderList());
  }

  onDelete(selectedMedicineId: number) {
      if (!this.selectedMedicineMap) {
        this.initMedicineMap();
      }

      this.selectedMedicineMap.delete(Number(selectedMedicineId));
      this.selectedMedicineList = Array.from(this.selectedMedicineMap.values());
  }

  gotoVendorOrderList() {
    this.router.navigate(['/vendor-orders']);
  }

  initMedicineMap() {
      this.selectedMedicineMap = new Map();

      if(!!this.vendorOrder.vendorOrderItems) {
         this.vendorOrder.vendorOrderItems.forEach((count, medicine) => {
             var medicineCountPair = {'medicine' : medicine, 'count' : count};
             this.selectedMedicineMap.set(Number(medicine.id), medicineCountPair);
         });
      }

      this.selectedMedicineList = Array.from(this.selectedMedicineMap.values());
  }
}

