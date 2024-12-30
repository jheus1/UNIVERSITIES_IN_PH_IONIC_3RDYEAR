import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaSPageRoutingModule } from './zamboanga-s-routing.module';

import { ZamboangaSPage } from './zamboanga-s.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaSPageRoutingModule
  ],
  declarations: [ZamboangaSPage]
})
export class ZamboangaSPageModule {}
