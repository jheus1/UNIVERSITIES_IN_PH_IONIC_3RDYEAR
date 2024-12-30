import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SCotabatoPageRoutingModule } from './s-cotabato-routing.module';

import { SCotabatoPage } from './s-cotabato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SCotabatoPageRoutingModule
  ],
  declarations: [SCotabatoPage]
})
export class SCotabatoPageModule {}
