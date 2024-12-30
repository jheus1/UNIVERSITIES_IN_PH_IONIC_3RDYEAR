import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoOccidental1PageRoutingModule } from './davao-occidental1-routing.module';

import { DavaoOccidental1Page } from './davao-occidental1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoOccidental1PageRoutingModule
  ],
  declarations: [DavaoOccidental1Page]
})
export class DavaoOccidental1PageModule {}
