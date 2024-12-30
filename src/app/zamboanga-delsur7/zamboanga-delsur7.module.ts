import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaDelsur7PageRoutingModule } from './zamboanga-delsur7-routing.module';

import { ZamboangaDelsur7Page } from './zamboanga-delsur7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaDelsur7PageRoutingModule
  ],
  declarations: [ZamboangaDelsur7Page]
})
export class ZamboangaDelsur7PageModule {}
