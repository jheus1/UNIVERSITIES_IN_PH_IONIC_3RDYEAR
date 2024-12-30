import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaDelsur4PageRoutingModule } from './zamboanga-delsur4-routing.module';

import { ZamboangaDelsur4Page } from './zamboanga-delsur4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaDelsur4PageRoutingModule
  ],
  declarations: [ZamboangaDelsur4Page]
})
export class ZamboangaDelsur4PageModule {}
