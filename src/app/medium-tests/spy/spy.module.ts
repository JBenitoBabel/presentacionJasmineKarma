import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpyPageRoutingModule } from './spy-routing.module';

import { SpyPage } from './spy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpyPageRoutingModule
  ],
  declarations: [SpyPage]
})
export class SpyPageModule {}
