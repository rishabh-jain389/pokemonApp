import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { DetailComponent } from './feature/detail/detail.component';
import { CreateProductComponent } from './feature/create-product/create-product.component';
import { ProductListComponent } from './feature/product-list/product-list.component';
import { AuthGuard} from './core/auth-guard.service'
import { HasProductService} from './core/has-product.service'

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'details/:id', component: DetailComponent, runGuardsAndResolvers: 'always',},
  {path: 'create-product', component: CreateProductComponent, canActivate:[AuthGuard]},
  {path: 'product-list', component: ProductListComponent, canActivate:[AuthGuard, HasProductService]},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
