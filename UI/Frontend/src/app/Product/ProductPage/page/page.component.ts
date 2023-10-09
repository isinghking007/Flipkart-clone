import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  
  @ViewChild('hello',{static:false}) FirstRef!:ElementRef;
  @ViewChild('next',{static:false}) Next!:ElementRef;
  @ViewChild('prev',{static:false}) Prev!:ElementRef;

  SideImagesIcons=['../../../../assets/Product/p1.webp','../../../../assets/Product/p2.webp','../../../../assets/Product/p3.webp',
  '../../../../assets/Product/p4.webp','../../../../assets/Product/p5.webp','../../../../assets/Product/p6.webp','../../../../assets/Product/p7.webp'
,'../../../../assets/Product/p8.webp']

SideImages=['../../../assets/Product/p1.webp','../../../assets/Product/p2.webp','../../../assets/Product/p3.webp','../../../assets/Product/p4.webp'
,'../../../assets/Product/p5.webp','../../../assets/Product/p6.webp','../../../assets/Product/p7.webp','../../../assets/Product/p8.webp','../../../assets/Product/p9.webp']
imageSrc="";
ExpandImages=[
  {
    img:this.imageSrc
  }
]
isChecked:boolean=false;
isChecked1:boolean=false;
imageArrayToDisplay:string[]=[];
price:number[]=[200,300];
finalPrice:number=0;
displaySize=5;
displayIndex=0;
startIndex=0;
selectedIndex=0;
prevIndex=this.displaySize;
ngOnInit(): void {
   this.imageArrayToDisplay=this.SideImagesIcons.slice(this.startIndex,this.currentIndex);
   console.log("current index = "+this.currentIndex+"\nDisplay Index "+this.displayIndex+"\nStart Index"+this.startIndex+"\nPrev Index"+this.prevIndex);
    console.log(this.finalPrice);
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
 
  mouseOverEvent(event:MouseEvent,img:any,i:number)
  {
  //  console.log(event);
   this.imageSrc=img;
   console.log(this.imageSrc+"\n"+img);
    //console.log(i);
  }
  constructor(){}
  
  changeEvent(event:any)
  {
    this.isChecked=!this.isChecked
    if(this.isChecked)
    {
      this.finalPrice+=Number(event.target.value); 
      
    }
    else{
      if(this.finalPrice>0)
      {
        this.finalPrice -=Number(event.target.value);
      }
      else
        this.finalPrice=Number(0); 
    }
   
    console.log(this.finalPrice);
  }

  changeEvent1(event:any)
  {
    var price_in=0;
    this.isChecked1=!this.isChecked1
    if(this.isChecked1)
    {
      this.finalPrice+=Number(event.target.value); 
    }
    else{
      if(this.finalPrice>0)
      {
        this.finalPrice -=Number(event.target.value);
      }
      else
        this.finalPrice=Number(0); 
    }
   
    console.log(this.finalPrice,price_in);
  }

}
