import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medecine } from '../../models/medecine';
import { Manufacturer } from '../../models/manufacturer';
import { MedecineGroup } from '../../models/medecine-group';
import { MedecineService } from '../../services/medecine.service';

@Component({
  selector: 'app-medecine-list',
  templateUrl: './medecine-list.component.html',
  styleUrls: ['./medecine-list.component.css']
})
export class MedecineListComponent implements OnInit {

  medecines: Medecine[];

  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private medecineService: MedecineService) {
  }

  ngOnInit() {
    this.updateMedecineList();
  }

  onDelete(id: number) {
    this.medecineService.delete(id).subscribe(result => this.updateMedecineList());
  }

  onUpdate(id: number, name: string, composition: string, manufacturer: Manufacturer, medecineGroup: MedecineGroup) {
    var medicine = new Medecine(id, name, composition);

    medicine.manufacturer = new Manufacturer(manufacturer.id, manufacturer.name, manufacturer.address);
    medicine.medecineGroup = new MedecineGroup(medecineGroup.id, medecineGroup.name)
    this.medecineService.update(medicine).subscribe(result => this.updateMedecineList());
  }

  updateMedecineList() {
    this.medecineService.findAll().subscribe(data => {
            this.medecines = data;
          });
  }
}
