import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rizal3PageRoutingModule } from './rizal3-routing.module';

import { Rizal3Page } from './rizal3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rizal3PageRoutingModule
  ],
  declarations: [Rizal3Page]
})
export class Rizal3PageModule {}
