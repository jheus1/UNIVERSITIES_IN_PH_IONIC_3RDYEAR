import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quezon6PageRoutingModule } from './quezon6-routing.module';

import { Quezon6Page } from './quezon6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quezon6PageRoutingModule
  ],
  declarations: [Quezon6Page]
})
export class Quezon6PageModule {}
