import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quezon7PageRoutingModule } from './quezon7-routing.module';

import { Quezon7Page } from './quezon7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quezon7PageRoutingModule
  ],
  declarations: [Quezon7Page]
})
export class Quezon7PageModule {}
