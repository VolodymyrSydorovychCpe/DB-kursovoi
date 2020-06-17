import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedecinegroupService } from '../../services/medecinegroup.service';
import { MedecineGroup } from '../../models/medecine-group';

@Component({
  selector: 'app-medecinegroup-form',
  templateUrl: './medecinegroup-form.component.html',
  styleUrls: ['./medecinegroup-form.component.css']
})
export class MedecinegroupFormComponent {

  medecineGroup: MedecineGroup;

  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private medecineGroupService: MedecinegroupService) {
    this.medecineGroup = new MedecineGroup();
  }

  onSubmit() {
    this.medecineGroupService.save(this.medecineGroup).subscribe(result => this.gotoMedecineGroupList());
  }

  gotoMedecineGroupList() {
    this.router.navigate(['/medecine-groups']);
  }
}

