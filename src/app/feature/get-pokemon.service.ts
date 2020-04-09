import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {observable, Observable} from 'rxjs'
import {map, mergeMap, reduce} from 'rxjs/operators'
import {PokemonUrl} from './pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class GetPokemonService {

  constructor(private http: HttpClient) { }

  getAllPokemon(url): Observable<PokemonUrl> {
    return this.http.get<PokemonUrl>(url)
    .pipe(
      
      map(response => response)
    );
  }

  getPokemondetails(id):any {
    return this.http.get(`pokemon/${id}`)
    .pipe(
      map(response => response)
    )
  }

  getPokemonCompletedetails(id):any {
    return this.http.get<any>(`pokemon-species/${id}`)
    .pipe(
      map(response => response)
    )
  }
}
