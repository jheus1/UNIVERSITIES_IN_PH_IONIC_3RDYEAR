import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bukidnon5PageRoutingModule } from './bukidnon5-routing.module';

import { Bukidnon5Page } from './bukidnon5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bukidnon5PageRoutingModule
  ],
  declarations: [Bukidnon5Page]
})
export class Bukidnon5PageModule {}
