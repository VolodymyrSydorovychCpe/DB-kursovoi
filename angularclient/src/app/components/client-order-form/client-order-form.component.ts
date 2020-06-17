import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientOrderService } from '../../services/client-order.service';
import { ClientService } from '../../services/client.service';
import { MedecineService } from '../../services/medecine.service';
import { ClientOrder } from '../../models/client-order';
import { Client } from '../../models/client';
import { Medecine } from '../../models/medecine';

@Component({
  selector: 'app-client-order-form',
  templateUrl: './client-order-form.component.html',
  styleUrls: ['./client-order-form.component.css']
})
export class ClientOrderFormComponent implements OnInit {

  clientOrder: ClientOrder;
  clients: Client[];

  medicines: Medecine[];
  medicineMap: Map<number, Medecine>;

  selectedMedicineMap: Map<number, Object>;
  selectedMedicineList: any[];

  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private clientOrderService: ClientOrderService,
              private clientService: ClientService,
              private medicineService: MedecineService) {
    this.clientOrder = new ClientOrder();
    this.medicineMap = new Map();
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
                if (params.id) {
                this.clientOrderService.get(Number(params.id)).subscribe(data => {
                                                this.clientOrder = data;
                                              });
                                            }
              });

    this.clientService.findAll().subscribe(data => {
                this.clients = data;
              });

    this.medicineService.findAll().subscribe(data => {
                this.medicines = data;
                this.medicines.forEach(medicine => this.medicineMap.set(Number(medicine.id), medicine));
              });
  }

  onSubmit() {
    this.clientOrder.clientOrderItems = new Map();

    this.selectedMedicineList.forEach(orderItem => this.clientOrder.clientOrderItems.set(orderItem.medicine, orderItem.count));
    this.clientOrderService.save(this.clientOrder).subscribe(result => this.gotoClientOrderList());
  }

  onAddMedicine(sMedicineId: number, sMedicineCount: number) {
    if (!this.selectedMedicineMap) {
      this.initMedicineMap();
    }

    var medicineCountPair = {'medicine' : this.medicineMap.get(Number(sMedicineId)), 'count' : sMedicineCount};
    this.selectedMedicineMap.set(Number(sMedicineId), medicineCountPair);
    this.selectedMedicineList = Array.from(this.selectedMedicineMap.values());
  }

  onDelete(selectedMedicineId: number) {
      if (!this.selectedMedicineMap) {
        this.initMedicineMap();
      }

      this.selectedMedicineMap.delete(Number(selectedMedicineId));
      this.selectedMedicineList = Array.from(this.selectedMedicineMap.values());
  }

  gotoClientOrderList() {
    this.router.navigate(['/client-orders']);
  }

  initMedicineMap() {
      this.selectedMedicineMap = new Map();

      if(!!this.clientOrder.clientOrderItems) {
         this.clientOrder.clientOrderItems.forEach((count, medicine) => {
             var medicineCountPair = {'medicine' : medicine, 'count' : count};
             this.selectedMedicineMap.set(Number(medicine.id), medicineCountPair);
         });
      }

      this.selectedMedicineList = Array.from(this.selectedMedicineMap.values());
  }
}
