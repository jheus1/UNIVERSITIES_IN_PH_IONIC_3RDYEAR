import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quezon8PageRoutingModule } from './quezon8-routing.module';

import { Quezon8Page } from './quezon8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quezon8PageRoutingModule
  ],
  declarations: [Quezon8Page]
})
export class Quezon8PageModule {}
