import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { ClientService } from './services/client.service';
import { ManufacturerService } from './services/manufacturer.service';
import { VendorService } from './services/vendor.service';
import { MedecinegroupService } from './services/medecinegroup.service';
import { MedecineService } from './services/medecine.service';
import { ClientOrderService } from './services/client-order.service';
import { VendorOrderService } from './services/vendor-order.service';

import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientFormComponent } from './components/client-form/client-form.component';

import { ManufacturerListComponent } from './components/manufacturer-list/manufacturer-list.component';
import { ManufacturerFormComponent } from './components/manufacturer-form/manufacturer-form.component';

import { VendorFormComponent } from './components/vendor-form/vendor-form.component';
import { VendorListComponent } from './components/vendor-list/vendor-list.component';

import { MedecinegroupListComponent } from './components/medecinegroup-list/medecinegroup-list.component';
import { MedecinegroupFormComponent } from './components/medecinegroup-form/medecinegroup-form.component';

import { ClientOrderListComponent } from './components/client-order-list/client-order-list.component';
import { ClientOrderFormComponent } from './components/client-order-form/client-order-form.component';

import { MedecineListComponent } from './components/medecine-list/medecine-list.component';
import { MedecineFormComponent } from './components/medecine-form/medecine-form.component';

import { VendorOrderListComponent } from './components/vendor-order-list/vendor-order-list.component';
import { VendorOrderFormComponent } from './components/vendor-order-form/vendor-order-form.component';
import { KeyvaluePipe } from './pipes/keyvalue.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientFormComponent,
    ManufacturerListComponent,
    ManufacturerFormComponent,
    VendorFormComponent,
    VendorListComponent,
    MedecinegroupListComponent,
    MedecinegroupFormComponent,
    ClientOrderListComponent,
    ClientOrderFormComponent,
    MedecineListComponent,
    MedecineFormComponent,
    VendorOrderListComponent,
    VendorOrderFormComponent,
    KeyvaluePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ClientService,
    ManufacturerService,
    VendorService,
    MedecinegroupService,
    MedecineService,
    ClientOrderService,
    VendorOrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
