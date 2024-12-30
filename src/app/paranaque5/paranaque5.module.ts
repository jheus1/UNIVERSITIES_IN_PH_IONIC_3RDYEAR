import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paranaque5PageRoutingModule } from './paranaque5-routing.module';

import { Paranaque5Page } from './paranaque5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paranaque5PageRoutingModule
  ],
  declarations: [Paranaque5Page]
})
export class Paranaque5PageModule {}
