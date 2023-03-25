import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  path:string = '/assets/imgs/';
  imgName:string[] = ['cabin.png', 'cake.png', 'circus.png', 'game.png', 'safe.png', 'submarine.png'];
}
