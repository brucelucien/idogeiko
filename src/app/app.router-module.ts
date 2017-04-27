import { ModuleWithResources } from '@angular/cli';
import { RouterModule } from '@angular/router';

import { TelaInicialComponent } from './interfaces/tela-inicial/tela-inicial.component';
import { GeradorDeSequenciasComponent } from './interfaces/gerador-de-sequencias/gerador-de-sequencias.component';

export const APP_ROUTER_MODULE: ModuleWithResources = RouterModule.forRoot([
    {
        path: '',
        redirectTo: '/home/generator',
        pathMatch: 'full'
    },
    {
        path: 'home',
        redirectTo: '/home/generator',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: TelaInicialComponent,
        children: [
            {
                path: 'generator',
                component: GeradorDeSequenciasComponent
            }
        ]
    }
]);