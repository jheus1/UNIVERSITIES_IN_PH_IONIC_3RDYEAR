import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bukidnon3PageRoutingModule } from './bukidnon3-routing.module';

import { Bukidnon3Page } from './bukidnon3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bukidnon3PageRoutingModule
  ],
  declarations: [Bukidnon3Page]
})
export class Bukidnon3PageModule {}
