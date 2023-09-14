import { Component, Input, OnInit } from '@angular/core';
import { carosuel } from './Carosuel.interface';

@Component({
  selector: 'app-carosuel',
  templateUrl: './carosuel.component.html',
  styleUrls: ['./carosuel.component.css']
})
export class CarosuelComponent implements OnInit {
  @Input() images:carosuel[]=[];
  @Input() indicators=true;
  @Input() controls=true;
  @Input() autoslide=false;
  @Input() slideInterval=1000 //default to 3 second
  selectedIndex=0;

  constructor(){}

  ngOnInit(): void {
    if(this.autoslide)
    {
      this.autoSlideImages();
    }
  }
  autoSlideImages()
  {
    setInterval(()=>{
      this.onNextClick()
    },this.slideInterval);
  }
  selectedImage(index:number):void{
    this.selectedIndex=index;
  }

  onPrevClick()
  {
    if(this.selectedIndex === 0)
    {
      this.selectedIndex = this.images.length - 1;
    }
    else{
      this.selectedIndex--;
    }
  }

  onNextClick()
  {
    if(this.selectedIndex == this.images.length -1)
    {
      this.selectedIndex=0;
    }
    else{
      this.selectedIndex++;
    }
  }
}
