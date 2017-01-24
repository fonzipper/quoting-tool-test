import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
