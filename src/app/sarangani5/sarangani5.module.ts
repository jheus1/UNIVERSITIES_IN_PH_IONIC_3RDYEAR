import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sarangani5PageRoutingModule } from './sarangani5-routing.module';

import { Sarangani5Page } from './sarangani5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sarangani5PageRoutingModule
  ],
  declarations: [Sarangani5Page]
})
export class Sarangani5PageModule {}
