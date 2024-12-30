import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pasay3PageRoutingModule } from './pasay3-routing.module';

import { Pasay3Page } from './pasay3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pasay3PageRoutingModule
  ],
  declarations: [Pasay3Page]
})
export class Pasay3PageModule {}
