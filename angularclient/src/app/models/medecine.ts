import { Manufacturer } from './manufacturer';
import { Vendor } from './vendor';
import { MedecineGroup } from './medecine-group';

export class Medecine {
    id: number;
    name: string;
    composition: string;
    manufacturer: Manufacturer;
    medecineGroup: MedecineGroup;
    vendors: Vendor[];


    constructor (
          id?: number,
          name?: string,
          composition?: string,
          manufacturer?: Manufacturer,
          medecineGroup?: MedecineGroup
        ) {
          this.id = id;
          this.name = name;
          this.composition = composition;
          this.manufacturer = manufacturer;
          this.medecineGroup = medecineGroup;
        }
}
