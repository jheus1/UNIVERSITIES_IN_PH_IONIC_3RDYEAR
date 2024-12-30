import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaDelsurPageRoutingModule } from './zamboanga-delsur-routing.module';

import { ZamboangaDelsurPage } from './zamboanga-delsur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaDelsurPageRoutingModule
  ],
  declarations: [ZamboangaDelsurPage]
})
export class ZamboangaDelsurPageModule {}
