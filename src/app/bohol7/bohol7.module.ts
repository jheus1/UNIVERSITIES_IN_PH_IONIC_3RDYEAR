import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bohol7PageRoutingModule } from './bohol7-routing.module';

import { Bohol7Page } from './bohol7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bohol7PageRoutingModule
  ],
  declarations: [Bohol7Page]
})
export class Bohol7PageModule {}
