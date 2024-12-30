import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Albay5PageRoutingModule } from './albay5-routing.module';

import { Albay5Page } from './albay5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Albay5PageRoutingModule
  ],
  declarations: [Albay5Page]
})
export class Albay5PageModule {}
