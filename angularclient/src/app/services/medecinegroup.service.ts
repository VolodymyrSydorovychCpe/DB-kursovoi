import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MedecineGroup } from '../models/medecine-group';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class MedecinegroupService {

  private medecineGroupsUrl: string;

  constructor(private http: HttpClient) {
    this.medecineGroupsUrl = 'http://localhost:9090/medicine-groups';
  }

  public findAll(): Observable<MedecineGroup[]> {
    return this.http.get(this.medecineGroupsUrl)
        .map((data: any) => {
          return data._embedded['medicine-groups'] as MedecineGroup[];
        });
  }

  public save(medecineGroup: MedecineGroup) {
    return this.http.post<MedecineGroup>(this.medecineGroupsUrl, medecineGroup);
  }

  public get(id: number) {
    return this.http.get<MedecineGroup>(this.medecineGroupsUrl + '/' + id);
  }

  public delete(id: number) {
    return this.http.delete<MedecineGroup>(this.medecineGroupsUrl + '/' + id);
  }

  public update(medecineGroup: MedecineGroup) {
    return this.http.post<MedecineGroup>(this.medecineGroupsUrl, medecineGroup);
  }
}

