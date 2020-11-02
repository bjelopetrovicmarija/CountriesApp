import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-podesavanja',
  templateUrl: './podesavanja.page.html',
  styleUrls: ['./podesavanja.page.scss'],
})
export class PodesavanjaPage implements OnInit {

  constructor( private renderer: Renderer2 ) { }

  ngOnInit() {
  }

  tamnaTema(event){
    //console.log(event);
    // pristupamo promenljive checked preko detail
    if(event.detail.checked){
      //setAttribute prima element, ime  atributa i novu vrednost;
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
    }
    else{
      this.renderer.setAttribute(document.body, 'color-theme', 'light');
    }
  }

}
