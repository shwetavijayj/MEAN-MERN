//1.Angular module file
import { NgModule } from "@angular/core";

//1.import all standard modules
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

//2. Import all components and directives
import { SimpleComponent } from "./components/simplecomponent/app.simple.component";
import { ProductComponent } from './components/productcomponent/app.product.component';
import { ProductFormComponent } from './components/productformcomponent/app.productform.component';
import { ProductCustomComponent } from './components/productcustomvalcomponent/app.productcustom.component';
import { EmpFormComponent } from './components/employeedetails/app.empdetails.component';
import { SampleServiceComponent } from './components/sampleservicecomponent/app.sampleservice.component'
import { SampleService } from './services/app.sample.service';
import { ProductServiceComponent } from './components/sampleservicecomponent/productservicecomponent/app.productservice.component';
import { CategorySenderComponent } from './components/mastercomponent/app.categorysender.component';
import { ProductReceiverComponent } from './components/mastercomponent/app.productreceiver.component';
import { CommunicationService } from './services/app.communication.service';
import { FilterPipe } from './pipes/app.filter.pipe';
import { CategoryComponent } from './components/catproduct/category.component';
import { ProductComponent1 } from './components/catproduct/product.component';
import { MainComponent } from './components/routeComponents/app.main.component';
import { HomeComponent } from './components/routeComponents/app.home.component';
import { AboutComponent } from './components/routeComponents/app.about.component';
import { ContactComponent } from './components/routeComponents/app.contact.component';
import { errorComponent } from './components/routeComponents/app.error.component';
import { routing } from './components/routeComponents/app.route.table';
import { AppGuardService, AuthUserService } from './services/app.test.guard.service';
import { LoginComponent } from './components/login/app.login.component';
import { ErrorComponent } from './components/login/app.error.component';
import { RegisterComponent } from './components/login/app.register.component';
//3.import all services
import { ProductService } from './components/sampleservicecomponent/app.product.service';
import { userService } from './components/login/app.user.service';
@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, routing],
    declarations: [MainComponent, HomeComponent, AboutComponent, ContactComponent, errorComponent, LoginComponent,
        ErrorComponent, RegisterComponent, ProductServiceComponent, ProductComponent, FilterPipe],
    providers: [AppGuardService, AuthUserService, userService, ProductService],
    bootstrap: [MainComponent]
    // imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule],
    // declarations: [SimpleComponent, ProductComponent, ProductFormComponent,
    //     ProductCustomComponent, EmpFormComponent, SampleServiceComponent,
    //     ProductServiceComponent, CategorySenderComponent, ProductReceiverComponent,
    //     FilterPipe, CategoryComponent, ProductComponent1],
    // providers: [SampleService, ProductService, CommunicationService],
    // bootstrap: [CategoryComponent]
})
export class AppModule {

}

//4. Making the AppModule as Bootstrap module
platformBrowserDynamic().bootstrapModule(AppModule);


