import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quirino9PageRoutingModule } from './quirino9-routing.module';

import { Quirino9Page } from './quirino9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quirino9PageRoutingModule
  ],
  declarations: [Quirino9Page]
})
export class Quirino9PageModule {}
