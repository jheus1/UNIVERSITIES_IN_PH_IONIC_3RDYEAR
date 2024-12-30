import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NCotabato5PageRoutingModule } from './n-cotabato5-routing.module';

import { NCotabato5Page } from './n-cotabato5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NCotabato5PageRoutingModule
  ],
  declarations: [NCotabato5Page]
})
export class NCotabato5PageModule {}
