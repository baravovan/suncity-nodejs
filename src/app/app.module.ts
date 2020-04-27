import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RootComponent } from './root/root.component';
import { ROUTING } from './app.routing';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CookieService } from "angular2-cookie/services/cookies.service";
import "@angular/compiler";
import { RegisterComponent } from './register/register.component';
import { AccessGuard } from './services/AccessGuard';
import { CitiesComponent } from './cities/cities.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { CitieslistComponent } from './citieslist/citieslist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    CitiesComponent,
    SearchComponent,
    AboutComponent,
    CitieslistComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule
  ],
  entryComponents: [ DialogBoxComponent ],
  providers: [CookieService, AccessGuard],
  bootstrap: [RootComponent]
})
export class AppModule { }
