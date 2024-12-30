import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sarangani3PageRoutingModule } from './sarangani3-routing.module';

import { Sarangani3Page } from './sarangani3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sarangani3PageRoutingModule
  ],
  declarations: [Sarangani3Page]
})
export class Sarangani3PageModule {}
