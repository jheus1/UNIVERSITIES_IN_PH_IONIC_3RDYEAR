import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pasay7PageRoutingModule } from './pasay7-routing.module';

import { Pasay7Page } from './pasay7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pasay7PageRoutingModule
  ],
  declarations: [Pasay7Page]
})
export class Pasay7PageModule {}
