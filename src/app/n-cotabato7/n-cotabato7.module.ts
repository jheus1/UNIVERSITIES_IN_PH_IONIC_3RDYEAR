import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NCotabato7PageRoutingModule } from './n-cotabato7-routing.module';

import { NCotabato7Page } from './n-cotabato7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NCotabato7PageRoutingModule
  ],
  declarations: [NCotabato7Page]
})
export class NCotabato7PageModule {}
