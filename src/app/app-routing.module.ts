import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth/auth.guard';
import { ProductDetailComponent } from './product-detail/product-detail.component';



const routes: Routes = [
  {
    path:'',
    component:ProductListComponent
  },
  {
    path:'products',
    component:ProductListComponent
  },
  {
    path:'products/:id',
    component:ProductDetailComponent
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path:'logout', 
    component:LogoutComponent,
    canActivate:[AuthGuard]
  }
      
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
