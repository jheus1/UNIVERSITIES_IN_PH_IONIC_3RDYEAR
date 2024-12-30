import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pasig5PageRoutingModule } from './pasig5-routing.module';

import { Pasig5Page } from './pasig5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pasig5PageRoutingModule
  ],
  declarations: [Pasig5Page]
})
export class Pasig5PageModule {}
