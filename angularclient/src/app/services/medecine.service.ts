import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Medecine } from '../models/medecine';
import { Manufacturer } from '../models/manufacturer';
import { MedecineGroup } from '../models/medecine-group';
import { Vendor } from '../models/vendor';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class MedecineService {

  private medicineListUrl: string;
  private medicinesUrl: string;

  constructor(private http: HttpClient) {
    this.medicineListUrl = 'http://localhost:9090/medicine-list';
    this.medicinesUrl = 'http://localhost:9090/medicine';
  }

  public findAll(): Observable<Medecine[]> {
    return this.http.get(this.medicineListUrl)
        .map((data: any) => {
          var medicines = data._embedded['medicines'];
          medicines.forEach(medicine => {
            this.http.get<Manufacturer>(medicine._links.manufacturer.href).subscribe(
                        result => {
                        medicine.manufacturer = new Manufacturer(result.id, result.name, result.address);
                  });
            this.http.get<MedecineGroup>(medicine._links.medecineGroup.href).subscribe(
                        result => {
                        medicine.medecineGroup = new MedecineGroup(result.id, result.name);
                  });
            });
          return medicines;
        });

  }

  public save(medicine: Medecine) {
    return this.http.post<Medecine>(this.medicinesUrl, medicine);
  }

  public get(id: number) {
    //return this.http.get<Medecine>(this.medicineListUrl + '/' + id);

    var medicine;

    return this.http.get(this.medicineListUrl + '/' + id)
                    .map((data: any) => {
                                    medicine = new Medecine(data.id, data.name, data.composition);

                                    this.http.get<Manufacturer>(data._links.manufacturer.href).subscribe(
                                                            result => {
                                                            medicine.manufacturer = new Manufacturer(result.id, result.name, result.address);
                                                      });

                                    this.http.get<MedecineGroup>(data._links.medecineGroup.href).subscribe(
                                                            result => {
                                                            medicine.medecineGroup = new MedecineGroup(result.id, result.name);
                                                      });

                                    this.http.get<any>(data._links.vendors.href).subscribe(
                                                            result => {
                                                            medicine.vendors = result._embedded.vendors;
                                                      });

                           return medicine;
                    });
  }

  public delete(id: number) {
    return this.http.delete<Medecine>(this.medicineListUrl + '/' + id);
  }

  public update(medicine: Medecine) {
    return this.http.post<Medecine>(this.medicinesUrl, medicine);
  }
}
