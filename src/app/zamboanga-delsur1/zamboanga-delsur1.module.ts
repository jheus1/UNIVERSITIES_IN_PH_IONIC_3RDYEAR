import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaDelsur1PageRoutingModule } from './zamboanga-delsur1-routing.module';

import { ZamboangaDelsur1Page } from './zamboanga-delsur1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaDelsur1PageRoutingModule
  ],
  declarations: [ZamboangaDelsur1Page]
})
export class ZamboangaDelsur1PageModule {}
