import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {HttpInterceptorService } from './http-interceptor.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {GetPokemonService} from '../feature/get-pokemon.service';


@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    AutocompleteLibModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
})
export class CoreModule { }
