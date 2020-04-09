import { Component, OnInit } from '@angular/core';
import { GetPokemonService } from '../get-pokemon.service';
import { PokemonUrl } from '../pokemon.model';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public nextUrl: string;
  public prevUrl: string;
  public pokemonData: any = [];
  public nextDisabled = false;
  public prevDisabled = true;
  constructor(private getPokemonService: GetPokemonService, private route: Router) { }

  ngOnInit() {
    this.getAllData('pokemon/?limit=20&offset=0');
  }

  getAllData(url): void {
    this.getPokemonService.getAllPokemon(url).subscribe((data: PokemonUrl) => {
      //console.log(data.results);
      this.prevUrl = data.previous;
      this.nextUrl = data.next;
      this.nextDisabled = this.nextUrl ? false : true;
      this.prevDisabled = this.prevUrl ? false : true;
      this.pokemonData = [];
      data.results.forEach(element => {
        let url = element.url;
        let id = url.split("/").reverse()[1];

        this.getPokemonService.getPokemondetails(id).subscribe((data) => {
          this.pokemonData.push(data);
        });
      });

    })
  }

  nextButton(): void {
    var relUrl = this.nextUrl.split("v2/")[1];
    this.getAllData(relUrl);

  }

  prevButton(): void {
    var relUrl = this.prevUrl.split("v2/")[1];
    this.getAllData(relUrl);
  }

  pokemonDetails(id: number): void{
    

    this.route.navigate(["/details", id], )
  }

}
