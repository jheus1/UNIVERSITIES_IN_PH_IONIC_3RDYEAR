import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaDelsur3PageRoutingModule } from './zamboanga-delsur3-routing.module';

import { ZamboangaDelsur3Page } from './zamboanga-delsur3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaDelsur3PageRoutingModule
  ],
  declarations: [ZamboangaDelsur3Page]
})
export class ZamboangaDelsur3PageModule {}
