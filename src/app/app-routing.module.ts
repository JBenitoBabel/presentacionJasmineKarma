import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'basic-tests',
    loadChildren: () => import('./basic-tests/basic-tests.module').then( m => m.BasicTestsPageModule)
  },
  {
    path: 'lifecycle',
    loadChildren: () => import('./lifecycle/lifecycle.module').then( m => m.LifecyclePageModule)
  },
  {
    path: 'event-emitter',
    loadChildren: () => import('./medium-tests/event-emitter/event-emitter.module').then( m => m.EventEmitterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
