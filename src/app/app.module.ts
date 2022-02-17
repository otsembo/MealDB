import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import {HomeComponent} from "./presentation/home/home.component";
import { HeaderComponent } from './presentation/header/header.component';
import { SearchComponent } from './presentation/search/search.component';
import { LoaderComponent } from './presentation/loader/loader.component';
import {HomeService} from "./domain/services/home/home.service";
import {MealRepository} from "./data/repository/MealRepository";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        SearchComponent,
        LoaderComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HomeService, MealRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
