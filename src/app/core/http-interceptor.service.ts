import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable,of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor  {
  intercept(req: HttpRequest<any>, next: HttpHandler):   Observable<HttpEvent<any>> {
    // All HTTP requests are going to go through this 
    //console.log(req);
    const clone = req.clone({
      url: "https://pokeapi.co/api/v2/" + req.url
    });
    //console.log(clone);
    return next.handle(clone);
}
}
