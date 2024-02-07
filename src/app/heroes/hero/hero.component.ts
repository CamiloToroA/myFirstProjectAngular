import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Iron man';
  public age: number = 30

  get capitalizeName():string{
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name = 'Spiderman';

  }

  changeAge():void{
    this.age = 45;
  }

  resetForm():void{
    this.name = 'Iron man'
    this.age = 30
    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>'
    // })
  }
}
