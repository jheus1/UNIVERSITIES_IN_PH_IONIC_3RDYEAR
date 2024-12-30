import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaDelnorte3PageRoutingModule } from './zamboanga-delnorte3-routing.module';

import { ZamboangaDelnorte3Page } from './zamboanga-delnorte3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaDelnorte3PageRoutingModule
  ],
  declarations: [ZamboangaDelnorte3Page]
})
export class ZamboangaDelnorte3PageModule {}
