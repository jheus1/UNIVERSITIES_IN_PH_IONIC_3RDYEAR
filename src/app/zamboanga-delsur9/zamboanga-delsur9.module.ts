import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaDelsur9PageRoutingModule } from './zamboanga-delsur9-routing.module';

import { ZamboangaDelsur9Page } from './zamboanga-delsur9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaDelsur9PageRoutingModule
  ],
  declarations: [ZamboangaDelsur9Page]
})
export class ZamboangaDelsur9PageModule {}
