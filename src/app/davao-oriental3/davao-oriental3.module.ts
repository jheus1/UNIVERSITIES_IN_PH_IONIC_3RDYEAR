import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoOriental3PageRoutingModule } from './davao-oriental3-routing.module';

import { DavaoOriental3Page } from './davao-oriental3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoOriental3PageRoutingModule
  ],
  declarations: [DavaoOriental3Page]
})
export class DavaoOriental3PageModule {}
