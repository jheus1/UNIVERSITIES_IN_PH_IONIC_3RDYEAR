import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quezon10PageRoutingModule } from './quezon10-routing.module';

import { Quezon10Page } from './quezon10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quezon10PageRoutingModule
  ],
  declarations: [Quezon10Page]
})
export class Quezon10PageModule {}
