import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavaoOccidentalPageRoutingModule } from './davao-occidental-routing.module';

import { DavaoOccidentalPage } from './davao-occidental.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavaoOccidentalPageRoutingModule
  ],
  declarations: [DavaoOccidentalPage]
})
export class DavaoOccidentalPageModule {}
