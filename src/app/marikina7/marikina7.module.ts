import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Marikina7PageRoutingModule } from './marikina7-routing.module';

import { Marikina7Page } from './marikina7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Marikina7PageRoutingModule
  ],
  declarations: [Marikina7Page]
})
export class Marikina7PageModule {}
