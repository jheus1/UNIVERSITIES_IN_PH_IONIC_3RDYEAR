import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rizal5PageRoutingModule } from './rizal5-routing.module';

import { Rizal5Page } from './rizal5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rizal5PageRoutingModule
  ],
  declarations: [Rizal5Page]
})
export class Rizal5PageModule {}
