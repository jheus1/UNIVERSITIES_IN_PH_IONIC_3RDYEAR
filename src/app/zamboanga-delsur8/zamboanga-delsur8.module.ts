import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaDelsur8PageRoutingModule } from './zamboanga-delsur8-routing.module';

import { ZamboangaDelsur8Page } from './zamboanga-delsur8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaDelsur8PageRoutingModule
  ],
  declarations: [ZamboangaDelsur8Page]
})
export class ZamboangaDelsur8PageModule {}
