import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rizal8PageRoutingModule } from './rizal8-routing.module';

import { Rizal8Page } from './rizal8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rizal8PageRoutingModule
  ],
  declarations: [Rizal8Page]
})
export class Rizal8PageModule {}
