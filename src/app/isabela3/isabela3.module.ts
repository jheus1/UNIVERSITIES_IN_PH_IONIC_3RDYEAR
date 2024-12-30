import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Isabela3PageRoutingModule } from './isabela3-routing.module';

import { Isabela3Page } from './isabela3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Isabela3PageRoutingModule
  ],
  declarations: [Isabela3Page]
})
export class Isabela3PageModule {}
