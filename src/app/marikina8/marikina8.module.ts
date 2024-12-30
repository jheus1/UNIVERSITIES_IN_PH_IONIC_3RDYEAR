import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Marikina8PageRoutingModule } from './marikina8-routing.module';

import { Marikina8Page } from './marikina8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Marikina8PageRoutingModule
  ],
  declarations: [Marikina8Page]
})
export class Marikina8PageModule {}
