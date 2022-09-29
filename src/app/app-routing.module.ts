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
  {
    path: 'form',
    loadChildren: () => import('./medium-tests/form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'spy',
    loadChildren: () => import('./medium-tests/spy/spy.module').then( m => m.SpyPageModule)
  },
  {
    path: 'private',
    loadChildren: () => import('./medium-tests/private/private.module').then( m => m.PrivatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
