import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamiguinPageRoutingModule } from './camiguin-routing.module';

import { CamiguinPage } from './camiguin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamiguinPageRoutingModule
  ],
  declarations: [CamiguinPage]
})
export class CamiguinPageModule {}
