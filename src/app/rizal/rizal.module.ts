import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RizalPageRoutingModule } from './rizal-routing.module';

import { RizalPage } from './rizal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RizalPageRoutingModule
  ],
  declarations: [RizalPage]
})
export class RizalPageModule {}
