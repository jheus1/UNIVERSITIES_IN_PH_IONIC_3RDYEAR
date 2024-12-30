import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NCotabatoPageRoutingModule } from './n-cotabato-routing.module';

import { NCotabatoPage } from './n-cotabato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NCotabatoPageRoutingModule
  ],
  declarations: [NCotabatoPage]
})
export class NCotabatoPageModule {}
