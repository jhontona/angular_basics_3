import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { MasterLayoutComponent } from './layout/master-layout/master-layout.component';
import { HomeComponent } from './home/components/home/home.component';
import { CategoryComponent } from './category/components/category/category.component';
import { Err404Component } from './shared/components/err404/err404.component';

import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '',
    component: MasterLayoutComponent,
    children: [
      {
        path: '',
        //component: HomeComponent
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'categories',
        //component: CategoryComponent
        loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
      },
      {
        path: 'admin',
        canActivate: [AdminGuard],
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: '**',
        component: Err404Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    , {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
