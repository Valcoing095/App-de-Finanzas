import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CreateClientComponent } from './create-client/create-client.component';
@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '',loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
