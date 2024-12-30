import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaDelsur10PageRoutingModule } from './zamboanga-delsur10-routing.module';

import { ZamboangaDelsur10Page } from './zamboanga-delsur10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaDelsur10PageRoutingModule
  ],
  declarations: [ZamboangaDelsur10Page]
})
export class ZamboangaDelsur10PageModule {}
