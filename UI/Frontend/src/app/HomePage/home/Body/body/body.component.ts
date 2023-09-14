import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  images=[
    {
      ImageSrc:'../../../../../assets/car-1.webp',
      ImageAlt:'First Image'
    },
    
    {
      ImageSrc:'https://source.unsplash.com/DlkF4-dbCOU',
      ImageAlt:'Second Image'
    },
    
    {
      ImageSrc:'https://source.unsplash.com/oMneOBYhJxY',
      ImageAlt:'Third Image'
    },
    
    {
      ImageSrc:'https://source.unsplash.com/9Wotadyt7K8',
      ImageAlt:'Fourth Image'
    },
    
    {
      ImageSrc:'https://source.unsplash.com/9KeDcJKEzBY',
      ImageAlt:'Fifth Image'
    }
  ]

  DropDownMainContent :{ [key: string]: string[] }={
    "Men's Top Wear":["All","Men's Casual Tshirt","Men's Formal Tshirts","Men's Formal Shirts","Men's Ethnic"],
    "Men's Bottom Wear":["All","Men's Casual Pant","Men's Formal Pant","Men's  Jenas","Men's Ethnic"],
    "Women's Top Wear":["All","Women's Casual Tshirt","Women's Formal Tshirts","Women's Formal Shirts","Women's Ethnic"],
    "Women's Bottom Wear":["All","Women's Casual Pant","Women's Formal Pant","Women's  Jenas","Women's Ethnic"],
  }
  //DropDownMainContent=["Men's Top Wear","Men's Bottom Wear","Women Ethnic Wear","Women Western","Men's Footwear"];
  constructor(){}
  ngOnInit(): void {
    
  }
}
