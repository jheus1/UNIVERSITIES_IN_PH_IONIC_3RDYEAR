import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaDelsur6PageRoutingModule } from './zamboanga-delsur6-routing.module';

import { ZamboangaDelsur6Page } from './zamboanga-delsur6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaDelsur6PageRoutingModule
  ],
  declarations: [ZamboangaDelsur6Page]
})
export class ZamboangaDelsur6PageModule {}
