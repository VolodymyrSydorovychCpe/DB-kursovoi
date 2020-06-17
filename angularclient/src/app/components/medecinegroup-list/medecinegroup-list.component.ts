import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedecineGroup } from '../../models/medecine-group';
import { MedecinegroupService } from '../../services/medecinegroup.service';

@Component({
  selector: 'app-medecinegroup-list',
  templateUrl: './medecinegroup-list.component.html',
  styleUrls: ['./medecinegroup-list.component.css']
})
export class MedecinegroupListComponent implements OnInit {

  medecineGroups: MedecineGroup[];

  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private medecineGroupService: MedecinegroupService) {
  }

  ngOnInit() {
    this.updateMedecineGroupList();
  }

  onDelete(id: number) {
    this.medecineGroupService.delete(id).subscribe(result => this.updateMedecineGroupList());
  }

  onUpdate(id: number, name: string) {
    this.medecineGroupService.update(new MedecineGroup(id, name)).subscribe(result => this.updateMedecineGroupList());
  }

  updateMedecineGroupList() {
    this.medecineGroupService.findAll().subscribe(data => {
            this.medecineGroups = data;
          });
  }
}

