import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Pregunta02Component } from './dashboard/pregunta2/pregunta-02.component';
import { Pregunta03Component } from './dashboard/pregunta3/pregunta.component';
import { Pregunta04Component } from './dashboard/pregunta-04/pregunta-04.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "dashboard", component: DashboardComponent,
        canActivate: [authGuard],
        children:[
            {path: "pregunta-02", component: Pregunta02Component},
            {path: "pregunta-03", component: Pregunta03Component},
            {path: "pregunta-04", component: Pregunta04Component}
        ]
     },
     {path: "**", redirectTo: "login", pathMatch: "full"},
     {path: "**", component: PageNotFoundComponent}
];
