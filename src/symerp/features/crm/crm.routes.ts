import { Routes } from "@angular/router";
import { IndexComponent } from "./pages/index/index.component";

const CRM_Routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'index', component: IndexComponent },
            // { path: 'product-details', component: ProductComponent },
            // { path: 'wish-list', component: WishlistComponent },
            // { path: 'cart', component: CartComponent },
            // { path: 'billing', component: BillingComponent },
        ]
    }
];

export { CRM_Routes };