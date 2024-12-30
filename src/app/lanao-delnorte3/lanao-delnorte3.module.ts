import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanaoDelnorte3PageRoutingModule } from './lanao-delnorte3-routing.module';

import { LanaoDelnorte3Page } from './lanao-delnorte3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanaoDelnorte3PageRoutingModule
  ],
  declarations: [LanaoDelnorte3Page]
})
export class LanaoDelnorte3PageModule {}
