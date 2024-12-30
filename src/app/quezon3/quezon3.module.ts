import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quezon3PageRoutingModule } from './quezon3-routing.module';

import { Quezon3Page } from './quezon3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quezon3PageRoutingModule
  ],
  declarations: [Quezon3Page]
})
export class Quezon3PageModule {}
