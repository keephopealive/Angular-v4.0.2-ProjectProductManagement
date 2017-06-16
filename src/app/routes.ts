import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductLandingComponent } from './product-landing/product-landing.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', component: ProductLandingComponent, pathMatch: 'full' },
    { path: 'products', component: ProductListComponent },
    { path: 'products/new', component: ProductNewComponent },
    { path: 'products/edit/:id', component: ProductEditComponent }
];
export const routing = RouterModule.forRoot(APP_ROUTES);
