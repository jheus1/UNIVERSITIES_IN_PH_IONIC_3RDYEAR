import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bohol3PageRoutingModule } from './bohol3-routing.module';

import { Bohol3Page } from './bohol3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bohol3PageRoutingModule
  ],
  declarations: [Bohol3Page]
})
export class Bohol3PageModule {}
