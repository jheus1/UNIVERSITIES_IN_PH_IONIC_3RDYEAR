import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiquirjorPageRoutingModule } from './siquirjor-routing.module';

import { SiquirjorPage } from './siquirjor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiquirjorPageRoutingModule
  ],
  declarations: [SiquirjorPage]
})
export class SiquirjorPageModule {}
