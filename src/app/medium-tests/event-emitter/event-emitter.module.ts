import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventEmitterPageRoutingModule } from './event-emitter-routing.module';

import { Feeder } from './event-emitter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventEmitterPageRoutingModule
  ],
  declarations: [Feeder]
})
export class EventEmitterPageModule {}
