import { Component, ElementRef, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/Popup/popup/popup.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @ViewChild('hello',{static:false}) FirstRef!:ElementRef;
  @ViewChild('next',{static:false}) Next!:ElementRef;
  @ViewChild('prev',{static:false}) Prev!:ElementRef;

  SideImagesIcons=['../../../../assets/Product/sp1.webp','../../../../assets/Product/sp2.webp','../../../../assets/Product/sp3.webp',
  '../../../../assets/Product/sp4.webp','../../../../assets/Product/sp5.webp','../../../../assets/Product/sp6.webp','../../../../assets/Product/sp7.webp'
,'../../../../assets/Product/sp8.webp','../../../../assets/Product/sp9.webp']

SideImages=['../../../assets/Product/p1.webp','../../../assets/Product/p2.webp','../../../assets/Product/p3.webp','../../../assets/Product/p4.webp'
,'../../../assets/Product/p5.webp','../../../assets/Product/p6.webp','../../../assets/Product/p7.webp','../../../assets/Product/p8.webp','../../../assets/Product/p9.webp']


imageArrayToDisplay:string[]=[];
displaySize=5;
displayIndex=0;
startIndex=0;
selectedIndex=0;
prevIndex=this.displaySize;
ngOnInit(): void {
   this.imageArrayToDisplay=this.SideImagesIcons.slice(this.startIndex,this.currentIndex);
   console.log("current index = "+this.currentIndex+"\nDisplay Index "+this.displayIndex+"\nStart Index"+this.startIndex+"\nPrev Index"+this.prevIndex);
  }

  prevClick(){
    this.prevIndex=this.startIndex-1;
    if(this.displayIndex>this.displaySize && this.prevIndex>=0)
    {
      this.displayIndex--;
      this.imageArrayToDisplay=this.SideImagesIcons.slice(this.prevIndex,this.displayIndex)
     this.startIndex--;
     this.Next.nativeElement.style.display='block';
    }
   this.currentIndex=this.displayIndex;
   if(this.prevIndex<=0)
   {
    this.Prev.nativeElement.style.display='none';
   }
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
      this.Prev.nativeElement.style.display='block';
    }
    //this will handle if we reaches to last image
    else if(this.currentIndex<=this.SideImagesIcons.length)
    {
      this.currentIndex=this.SideImagesIcons.length;
      this.displayIndex=this.currentIndex;
      this.startIndex=(this.SideImagesIcons.length-this.displaySize);
      this.Next.nativeElement.style.display='none';
    }
    console.log("current index = "+this.currentIndex+"\nDisplay Index "+this.displayIndex+"\nStart Index"+this.startIndex);
  }
 
  constructor(){}

}
