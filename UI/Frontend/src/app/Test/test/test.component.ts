import { Component, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/Popup/popup/popup.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  SideImagesIcons=['../../../../assets/Product/sp1.webp','../../../../assets/Product/sp2.webp','../../../../assets/Product/sp3.webp',
  '../../../../assets/Product/sp4.webp','../../../../assets/Product/sp5.webp','../../../../assets/Product/sp6.webp','../../../../assets/Product/sp7.webp'
,'../../../../assets/Product/sp8.webp','../../../../assets/Product/sp9.webp']

imageArrayToDisplay:string[]=[];
displaySize=5;
displayIndex=0;
startIndex=0;
  ngOnInit(): void {
   this.imageArrayToDisplay=this.SideImagesIcons.slice(this.startIndex,this.currentIndex);
   console.log("current index = "+this.currentIndex+"\nDisplay Index "+this.displayIndex+"\nStart Index"+this.startIndex+"\nPrev Index"+this.prevIndex);
  }
  selectedIndex=0;
  prevIndex=this.displaySize;
  prevClick(){
    this.prevIndex=this.startIndex-1;
    if(this.displayIndex>this.displaySize && this.prevIndex>=0)
    {
      this.displayIndex--;
      this.imageArrayToDisplay=this.SideImagesIcons.slice(this.prevIndex,this.displayIndex)
     this.startIndex--;
    }
   this.currentIndex=this.displayIndex;
   console.log("current index = "+this.currentIndex+"\nDisplay Index "+this.displayIndex+"\nStart Index"+this.startIndex+"\nPrev Index"+this.prevIndex);
    
    
  }
  currentIndex=this.displaySize;
  nextClick(){
    this.displayIndex=this.currentIndex+1;
    this.startIndex+=1;
    //this loop will run till to show the images till it reaches the last image
    if(this.displayIndex>this.displaySize && this.displayIndex <=this.SideImagesIcons.length)
    {
      this.imageArrayToDisplay=this.SideImagesIcons.slice(this.startIndex,this.displayIndex)
      this.currentIndex++;
    }
    //this will handle if we reaches to last image
    else if(this.currentIndex<=this.SideImagesIcons.length)
    {
      this.currentIndex=this.SideImagesIcons.length;
      this.displayIndex=this.currentIndex;
      this.startIndex=(this.SideImagesIcons.length-this.displaySize);
    }
    console.log("current index = "+this.currentIndex+"\nDisplay Index "+this.displayIndex+"\nStart Index"+this.startIndex);
  }
 
  constructor(){}

}
