import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quirino5PageRoutingModule } from './quirino5-routing.module';

import { Quirino5Page } from './quirino5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quirino5PageRoutingModule
  ],
  declarations: [Quirino5Page]
})
export class Quirino5PageModule {}
