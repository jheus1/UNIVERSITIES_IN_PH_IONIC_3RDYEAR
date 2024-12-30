import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouthernL10PageRoutingModule } from './southern-l10-routing.module';

import { SouthernL10Page } from './southern-l10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouthernL10PageRoutingModule
  ],
  declarations: [SouthernL10Page]
})
export class SouthernL10PageModule {}
