import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedecineService } from '../../services/medecine.service';
import { ManufacturerService } from '../../services/manufacturer.service';
import { MedecinegroupService } from '../../services/medecinegroup.service';
import { VendorService } from '../../services/vendor.service';
import { Medecine } from '../../models/medecine';
import { Manufacturer } from '../../models/manufacturer';
import { MedecineGroup } from '../../models/medecine-group';
import { Vendor } from '../../models/vendor';

@Component({
  selector: 'app-medecine-form',
  templateUrl: './medecine-form.component.html',
  styleUrls: ['./medecine-form.component.css']
})
export class MedecineFormComponent implements OnInit {

  medicine: Medecine;
  selectedManufacturer: Manufacturer;
  selectedMedicineGroup: MedecineGroup;

  manufacturers:  Manufacturer[];
  medicineGroups: MedecineGroup[];
  vendorMap: Map<number, Vendor>;
  vendors: Vendor[];

  selectedVendorMap: Map<number, Vendor>;
  selectedVendorList: Vendor[];
  selectedVendor: Vendor;

  medicineId: number;

  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private medicineService: MedecineService,
              private manufacturerService: ManufacturerService,
              private medicineGroupService: MedecinegroupService,
              private vendorService: VendorService) {
    this.medicine = new Medecine();
    this.selectedVendorMap = null;
    this.selectedVendorList = null;

    this.vendorMap = new Map();
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
                if (params.id) {
                this.medicineId = params.id;
                this.medicineService.get(params.id).subscribe(data => {
                                                this.medicine = data;
                                              });
                }
              });

    this.manufacturerService.findAll().subscribe(data => {
                this.manufacturers = data;
              });

    this.medicineGroupService.findAll().subscribe(data => {
                this.medicineGroups = data;
              });

    this.vendorService.findAll().subscribe(data => {
                data.forEach(vendor => this.vendorMap.set(vendor.id, new Vendor(vendor.id, vendor.name, vendor.address)));
                this.vendors = Array.from(this.vendorMap.values());
              });

    if (this.medicineId && this.medicine.vendors) {
      this.medicine.vendors.forEach(vendor => {
                          this.selectedVendorMap = new Map();
                          this.selectedVendorMap.set(vendor.id, vendor);
                        });
      this.selectedVendorList = Array.from(this.selectedVendorMap.values());
    }

  }

  onSubmit() {
    this.medicine.vendors = Array.from(this.selectedVendorMap.values());
    this.medicineService.save(this.medicine).subscribe(result => this.gotoMedicineList());
  }

  gotoMedicineList() {
    this.router.navigate(['/medecine-list']);
  }

  onSelect(selectedVendorId: number) {
    if (!this.selectedVendorMap) {
      this.initVendorMap();
    }

    this.selectedVendorMap.set(Number(selectedVendorId), this.vendorMap.get(Number(selectedVendorId)));
    this.selectedVendorList = Array.from(this.selectedVendorMap.values());


    console.log(this.medicine);
  }

  onDelete(selectedVendorId: number) {
      if (!this.selectedVendorMap) {
        this.initVendorMap();
      }
      this.selectedVendorMap.delete(Number(selectedVendorId));
      this.selectedVendorList = Array.from(this.selectedVendorMap.values());
  }

  initVendorMap() {
      this.selectedVendorMap = new Map();
      if (this.medicine.vendors) {
        this.medicine.vendors.forEach(vendor => {
                                    this.selectedVendorMap.set(Number(vendor.id), vendor);
                                  });
      }
  }
}

