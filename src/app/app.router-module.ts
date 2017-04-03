import { ModuleWithResources } from '@angular/cli';
import { RouterModule } from '@angular/router';

import { TelaInicialComponent } from './interfaces/tela-inicial/tela-inicial.component';

export const APP_ROUTER_MODULE: ModuleWithResources = RouterModule.forRoot([
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: TelaInicialComponent
    }
]);