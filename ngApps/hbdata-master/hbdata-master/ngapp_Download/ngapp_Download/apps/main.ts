import { SimpleComponent } from "./components/simplecomponent/app.simple.component";
import { NgModule } from "@angular/core";
import { BrowserModule, platformBrowser } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@NgModule({
  declarations: [SimpleComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [SimpleComponent]
})
export class AppModule {}
platformBrowserDynamic().bootstrapModule(AppModule);
