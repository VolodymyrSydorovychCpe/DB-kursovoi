import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientListComponent } from '../components/client-list/client-list.component';
import { ClientFormComponent } from '../components/client-form/client-form.component';

import { ManufacturerListComponent } from '../components/manufacturer-list/manufacturer-list.component';
import { ManufacturerFormComponent } from '../components/manufacturer-form/manufacturer-form.component';

import { VendorListComponent } from '../components/vendor-list/vendor-list.component';
import { VendorFormComponent } from '../components/vendor-form/vendor-form.component';

import { MedecinegroupListComponent } from '../components/medecinegroup-list/medecinegroup-list.component';
import { MedecinegroupFormComponent } from '../components/medecinegroup-form/medecinegroup-form.component';

import { MedecineListComponent } from '../components/medecine-list/medecine-list.component';
import { MedecineFormComponent } from '../components/medecine-form/medecine-form.component';

import { ClientOrderListComponent } from '../components/client-order-list/client-order-list.component';
import { ClientOrderFormComponent } from '../components/client-order-form/client-order-form.component';

import { VendorOrderListComponent } from '../components/vendor-order-list/vendor-order-list.component';
import { VendorOrderFormComponent } from '../components/vendor-order-form/vendor-order-form.component';

const routes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'addclient', component: ClientFormComponent },

  { path: 'manufacturers', component: ManufacturerListComponent },
  { path: 'addmanufacturer', component: ManufacturerFormComponent },

  { path: 'vendors', component: VendorListComponent },
  { path: 'addvendor', component: VendorFormComponent },

  { path: 'medecine-groups', component: MedecinegroupListComponent },
  { path: 'add-medecine-group', component: MedecinegroupFormComponent },

  { path: 'medecine-list', component: MedecineListComponent },
  { path: 'add-medecine', component: MedecineFormComponent },
  { path: 'medicine-details/:id', component: MedecineFormComponent },

  { path: 'client-orders', component: ClientOrderListComponent },
  { path: 'add-client-order', component: ClientOrderFormComponent },
  { path: 'client-order-details/:id', component: ClientOrderFormComponent },

  { path: 'vendor-orders', component: VendorOrderListComponent },
  { path: 'add-vendor-order', component: VendorOrderFormComponent },
  { path: 'vendor-order-details/:id', component: VendorOrderFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
