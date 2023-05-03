import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./main/home-page/home-page.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomePageComponent,
    },
    {
        path: 'affiliate',
        loadComponent: () =>
            import('./main/advertiser/advertiser.component').then((c) => c.AdvertiserComponent),
    },
    {
        path: 'about-us',
        loadComponent: () =>
            import('./main/about/about.component').then((c) => c.AboutComponent),
    },
    {
        path: 'contacts',
        loadComponent: () =>
            import('./main/contact/contact.component').then((c) => c.ContactComponent),
    },
    {
        path: 'faq',
        loadComponent: () =>
            import('./main/fuck-you/fuck-you.component').then((c) => c.FuckYouComponent),
    },
    {
        path: 'privacy',
        loadComponent: () =>
            import('./main/privacy-doc/privacy-doc.component').then((c) => c.PrivacyDocComponent),
    },
    {
        path: '**',
        redirectTo: '/home',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        anchorScrolling: 'enabled'
    })],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
