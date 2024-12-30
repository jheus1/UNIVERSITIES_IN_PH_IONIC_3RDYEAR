import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Antique5PageRoutingModule } from './antique5-routing.module';

import { Antique5Page } from './antique5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Antique5PageRoutingModule
  ],
  declarations: [Antique5Page]
})
export class Antique5PageModule {}
