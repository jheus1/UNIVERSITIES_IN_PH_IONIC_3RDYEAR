import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgusanDelsur5PageRoutingModule } from './agusan-delsur5-routing.module';

import { AgusanDelsur5Page } from './agusan-delsur5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgusanDelsur5PageRoutingModule
  ],
  declarations: [AgusanDelsur5Page]
})
export class AgusanDelsur5PageModule {}
