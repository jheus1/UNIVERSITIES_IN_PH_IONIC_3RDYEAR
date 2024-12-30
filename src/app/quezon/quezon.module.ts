import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuezonPageRoutingModule } from './quezon-routing.module';

import { QuezonPage } from './quezon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuezonPageRoutingModule
  ],
  declarations: [QuezonPage]
})
export class QuezonPageModule {}
