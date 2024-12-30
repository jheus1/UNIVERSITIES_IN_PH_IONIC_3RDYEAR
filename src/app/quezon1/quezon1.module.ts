import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quezon1PageRoutingModule } from './quezon1-routing.module';

import { Quezon1Page } from './quezon1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quezon1PageRoutingModule
  ],
  declarations: [Quezon1Page]
})
export class Quezon1PageModule {}
