import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoOccidental7PageRoutingModule } from './davao-occidental7-routing.module';

import { DavaoOccidental7Page } from './davao-occidental7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoOccidental7PageRoutingModule
  ],
  declarations: [DavaoOccidental7Page]
})
export class DavaoOccidental7PageModule {}
