import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoblonPageRoutingModule } from './roblon-routing.module';

import { RoblonPage } from './roblon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoblonPageRoutingModule
  ],
  declarations: [RoblonPage]
})
export class RoblonPageModule {}
