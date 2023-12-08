import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CreateClientComponent } from './components/client/create-client/create-client.component'; 
@NgModule({
  imports: [
    RouterModule.forRoot(
      [
      {path: '',loadChildren: () => import('./components/generals/tabs/tabs.module').then(m => m.TabsPageModule)},
      {path:'client/create', component: CreateClientComponent}
      ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
