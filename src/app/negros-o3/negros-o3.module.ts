import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegrosO3PageRoutingModule } from './negros-o3-routing.module';

import { NegrosO3Page } from './negros-o3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegrosO3PageRoutingModule
  ],
  declarations: [NegrosO3Page]
})
export class NegrosO3PageModule {}
