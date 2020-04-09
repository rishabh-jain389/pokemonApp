import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { GetPokemonService } from '../get-pokemon.service';
import { ThrowStmt } from '@angular/compiler';
import { Observable, forkJoin } from 'rxjs';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public name:string;
  public img:string;
  public stats = [];
  id:string;
  types = [];
  height:string;
  weight:string;
  abilities = [];
  catchRate:string;
  genderRatio: string;
  eggGroups = [];
  hatchSteps:string;
  shape:string;
  results = []
  constructor(private route: ActivatedRoute, private getPokemonService: GetPokemonService) { }

  ngOnInit() {
    this.route.url.subscribe(url =>{
      //console.log(url);
      this.id = url[1].path;
      let req1 = this.getPokemonService.getPokemondetails(url[1].path);
      let req2 = this.getPokemonService.getPokemonCompletedetails(url[1].path);

      forkJoin([req1, req2]).subscribe(results => {
        // results[0] is our character
        // results[1] is our character homeworld
        this.results = results;
        console.log(results);
        this.name = results[0].name;
        this.img = results[0].sprites.front_default;
        this.stats = results[0].stats;
        this.types = results[0].types;
        this.height = results[0].height;
        this.weight = results[0].weight;
        this.abilities = results[0].abilities;
        this.catchRate = results[1].capture_rate;
        this.genderRatio = results[1].gender_rate;
        this.eggGroups = results[1].egg_groups;
        this.hatchSteps = results[1].hatch_counter;
        this.shape = results[1].shape.name;


      });

  });
   

  }

}
