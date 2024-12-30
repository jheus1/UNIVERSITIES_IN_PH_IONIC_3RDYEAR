import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatanduanesPageRoutingModule } from './catanduanes-routing.module';

import { CatanduanesPage } from './catanduanes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatanduanesPageRoutingModule
  ],
  declarations: [CatanduanesPage]
})
export class CatanduanesPageModule {}
