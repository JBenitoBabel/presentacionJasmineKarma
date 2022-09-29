import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Feeder } from './event-emitter.page';

const routes: Routes = [
  {
    path: '',
    component: Feeder
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventEmitterPageRoutingModule {}
