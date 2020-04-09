import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {GetPokemonService} from '../../feature/get-pokemon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  keyword = 'name';
  public pokemonNames = [];

  constructor(private auth: AuthService, private router:Router, public getPokemon: GetPokemonService) { }



  ngOnInit() {
    this.getPokemon.getAllPokemon("pokemon?limit=964").subscribe((data) => {
      this.pokemonNames = data.results;
    })
  }

  selectEvent(item) {
    // do something with selected item
    let id = item.url.split("/").reverse()[1];
    this.router.navigate(["/details", id], )
  }


}
