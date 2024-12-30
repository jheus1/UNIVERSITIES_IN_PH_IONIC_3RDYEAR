import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaDelsur5PageRoutingModule } from './zamboanga-delsur5-routing.module';

import { ZamboangaDelsur5Page } from './zamboanga-delsur5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaDelsur5PageRoutingModule
  ],
  declarations: [ZamboangaDelsur5Page]
})
export class ZamboangaDelsur5PageModule {}
