import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParanaquePageRoutingModule } from './paranaque-routing.module';

import { ParanaquePage } from './paranaque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParanaquePageRoutingModule
  ],
  declarations: [ParanaquePage]
})
export class ParanaquePageModule {}
