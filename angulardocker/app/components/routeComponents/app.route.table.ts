import { RouterModule, Routes, Route } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from './app.home.component';
import { ContactComponent } from './app.contact.component';
import { AboutComponent } from './app.about.component';
import { ProductComponent } from "../productcomponent/app.product.component";
import { errorComponent } from '../routeComponents/app.error.component';
import { AppGuardService, AuthUserService } from '../../services/app.test.guard.service';
import { LoginComponent } from '../login/app.login.component';
import { ErrorComponent } from '../login/app.error.component';
import { RegisterComponent } from '../login/app.register.component';
import { ProductServiceComponent } from '../sampleservicecomponent/productservicecomponent/app.productservice.component';
//define route table
// const routes: Routes = [
//     { path: " ", component: HomeComponent },
//     { path: "about/:id", component: AboutComponent },
//     {
//         path: "contact", component: ContactComponent, children: [{
//             path: "product", component: ProductComponent
//         }]
//     }
// ];

const routes: Routes = [
    // { path: "home", component: HomeComponent },
    // { path: "about", component: AboutComponent },
    // {
    //     path: "contact", component: ContactComponent, canActivate: [AppGuardService]
    // },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    { path: "product", component: ProductServiceComponent },
    { path: "error", component: ErrorComponent },
];



//register the route table for root of the current angular app
// when routing i provided to import of ngModule this will load RouterModule with route table
export const routing: ModuleWithProviders = RouterModule.forRoot(routes); 