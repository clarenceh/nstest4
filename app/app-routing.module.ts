import { ItemDetailComponent } from './pages/item-detail.component';
import { ItemListComponent } from './pages/item-list.component';

export const routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: 'list', component: ItemListComponent },
    { path: 'detail', component: ItemDetailComponent }
]