import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlbayPageRoutingModule } from './albay-routing.module';

import { AlbayPage } from './albay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlbayPageRoutingModule
  ],
  declarations: [AlbayPage]
})
export class AlbayPageModule {}
