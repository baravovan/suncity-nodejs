import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
 
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CitiesComponent } from './cities/cities.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';

import { CitieslistComponent } from './citieslist/citieslist.component';

import { AccessGuard } from './services/AccessGuard';

export const AppRoutes: Routes = [
    { 
        path: '', 
        component: LoginComponent 
    },
    { 
        path: 'register', 
        component: RegisterComponent 
    },
    { 
        path: 'home', 
        component: HomeComponent, 
        data:{requiresLogin: true}, 
        canActivate: [ AccessGuard ],
        children : [
            { 
                path: '', 
                redirectTo: 'about',
                pathMatch: 'full'
            },
            { 
                path: 'about', 
                component: AboutComponent
            },
            { 
                path: 'cities', 
                component: CitiesComponent,
                children: [
                    { 
                        path: '', 
                        redirectTo: 'list',
                        pathMatch: 'full'
                    },
                    { 
                        path: 'list', 
                        component: CitieslistComponent
                    }
                ]
            },
            { 
                path: 'search', 
                component: SearchComponent
            }
        ]
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);