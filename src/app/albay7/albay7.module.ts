import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Albay7PageRoutingModule } from './albay7-routing.module';

import { Albay7Page } from './albay7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Albay7PageRoutingModule
  ],
  declarations: [Albay7Page]
})
export class Albay7PageModule {}
