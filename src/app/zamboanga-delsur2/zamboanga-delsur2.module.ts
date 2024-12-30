import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaDelsur2PageRoutingModule } from './zamboanga-delsur2-routing.module';

import { ZamboangaDelsur2Page } from './zamboanga-delsur2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaDelsur2PageRoutingModule
  ],
  declarations: [ZamboangaDelsur2Page]
})
export class ZamboangaDelsur2PageModule {}
