import { Routes } from "@angular/router";
import { ProductlistComponent } from "./pages/productlist/productlist.component";
import { ProductComponent } from "./pages/product/product.component";
import { CartComponent } from "./pages/cart/cart.component";
import { WishlistComponent } from "./pages/wishlist/wishlist.component";

const Shop_Routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'products', pathMatch: 'full' },
            { path: 'products', component: ProductlistComponent },
            { path: 'product-details', component: ProductComponent },
            { path: 'wish-list', component: WishlistComponent },
            { path: 'cart', component: CartComponent },
        ]
    }
];

export { Shop_Routes };