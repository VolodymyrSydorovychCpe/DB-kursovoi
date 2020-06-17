import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Manufacturer } from '../../models/manufacturer';
import { ManufacturerService } from '../../services/manufacturer.service';

@Component({
  selector: 'app-manufacturer-list',
  templateUrl: './manufacturer-list.component.html',
  styleUrls: ['./manufacturer-list.component.css']
})
export class ManufacturerListComponent implements OnInit {

  manufacturers: Manufacturer[];

  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private manufacturerService: ManufacturerService) {
  }

  ngOnInit() {
    this.updateManufacturerList();
  }

  onDelete(id: number) {
    this.manufacturerService.delete(id).subscribe(result => this.updateManufacturerList());
  }

  onUpdate(id: number, name: string, address: string) {
    this.manufacturerService.update(new Manufacturer(id, name, address)).subscribe(result => this.updateManufacturerList());
  }

  updateManufacturerList() {
    this.manufacturerService.findAll().subscribe(data => {
            this.manufacturers = data;
          });
  }
}
