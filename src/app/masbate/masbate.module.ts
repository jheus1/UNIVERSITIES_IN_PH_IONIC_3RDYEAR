import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasbatePageRoutingModule } from './masbate-routing.module';

import { MasbatePage } from './masbate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasbatePageRoutingModule
  ],
  declarations: [MasbatePage]
})
export class MasbatePageModule {}
