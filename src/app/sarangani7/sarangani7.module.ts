import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sarangani7PageRoutingModule } from './sarangani7-routing.module';

import { Sarangani7Page } from './sarangani7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sarangani7PageRoutingModule
  ],
  declarations: [Sarangani7Page]
})
export class Sarangani7PageModule {}
