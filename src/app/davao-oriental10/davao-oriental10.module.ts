import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoOriental10PageRoutingModule } from './davao-oriental10-routing.module';

import { DavaoOriental10Page } from './davao-oriental10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoOriental10PageRoutingModule
  ],
  declarations: [DavaoOriental10Page]
})
export class DavaoOriental10PageModule {}
