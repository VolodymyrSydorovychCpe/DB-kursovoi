import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../../models/vendor';
import { VendorService } from '../../services/vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[];

  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private vendorService: VendorService) {
  }

  ngOnInit() {
    this.updateVendorList();
  }

  onDelete(id: number) {
    this.vendorService.delete(id).subscribe(result => this.updateVendorList());
  }

  onUpdate(id: number, name: string, address: string) {
    this.vendorService.update(new Vendor(id, name, address)).subscribe(result => this.updateVendorList());
  }

  updateVendorList() {
    this.vendorService.findAll().subscribe(data => {
            this.vendors = data;
          });
  }
}

