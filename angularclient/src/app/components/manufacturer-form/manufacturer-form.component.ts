import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManufacturerService } from '../../services/manufacturer.service';
import { Manufacturer } from '../../models/manufacturer';

@Component({
  selector: 'app-manufacturer-form',
  templateUrl: './manufacturer-form.component.html',
  styleUrls: ['./manufacturer-form.component.css']
})
export class ManufacturerFormComponent {

  manufacturer: Manufacturer;

  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private manufacturerService: ManufacturerService) {
    this.manufacturer = new Manufacturer();
  }

  onSubmit() {
    this.manufacturerService.save(this.manufacturer).subscribe(result => this.gotoManufacturerList());
  }

  gotoManufacturerList() {
    this.router.navigate(['/manufacturers']);
  }
}

