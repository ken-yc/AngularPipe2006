import { Component, OnInit } from '@angular/core';
import { ISuperhero } from './hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  pageTitle = 'SuperHero List';

  superheroes: ISuperhero[];
  filteredSuperHeroes: ISuperhero[] = [];
  showImage = false;

  // Filter fields
  attrListFilter = '';

  get listFilter() {
      return this.attrListFilter;
  }

  set listFilter(temp: string) {
      this.attrListFilter = temp;
      this.filteredSuperHeroes = this.attrListFilter ?
          this.performFilter(this.attrListFilter) : this.superheroes;
  }

  performFilter(filterBy: string):ISuperhero[] {
      filterBy = filterBy.toLocaleLowerCase();
      //return this.superheroes.filter((metahuman:ISuperhero) => metahuman.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
      return this.superheroes.filter(function(metahuman:ISuperhero) {
          return (metahuman.name.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
                  metahuman.ability.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
                  metahuman.organization.toLocaleLowerCase().indexOf(filterBy) !== -1);
      });
  }

  toggleImage(){
      console.log('button clicked');
      this.showImage = !this.showImage;
  }

  starEventWasTriggered(temp:string): void {
      this.pageTitle = temp;
  }

  constructor(private heroServ: HeroService){
      this.superheroes = heroServ.getCharacters();
      this.filteredSuperHeroes = this.superheroes;
  }

    ngOnInit() {
    }
}
