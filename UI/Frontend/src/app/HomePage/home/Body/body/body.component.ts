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
  
  products = [
    {
      name: 'Best of Trimmers',
      description: 'realme ,Mi,Philips & more',
      imageUrl: '../../../../../assets/trimmer.webp',
      price:'399'
    },
    {
      name: 'Xeroxs',
      description: 'Brother',
      imageUrl:  '../../../../../assets/xerox.webp',
      price:'10190'
    },
    {
      name: 'Top Mirrorless Cameras',
      description: 'Canon, Sony,Samsung',
      imageUrl:  '../../../../../assets/camra.webp',
      price:'20000'
    }, {
      name: 'Printers',
      description: 'HP',
      imageUrl:  '../../../../../assets/printer.webp',
      price:'4000'
    },
    {
      name: 'Monitors',
      description: 'Lenovo',
      imageUrl:  '../../../../../assets/monitor.webp',
      price:'7949'
    }, 
    {
      name: 'Premium Powerbanks',
      description: 'Ambrane,MI & More',
      imageUrl: '../../../../../assets/power bank.webp',
      price:'2000'
    },
   
    
    // Add more products as needed
  ];

  Childproducts = [
    {
      name: 'Geared Cycles',
      description: 'Leader, cardiac & more',
      imageUrl: '../../../../../assets/Child Store/cycle.webp',
      price:'399'
    },
    {
      name: 'Rider Helmet',
      description: 'Vega, SteelBird & more',
      imageUrl:  '../../../../../assets/Child Store/helmet.webp',
      price:'10190'
    },
    {
      name: 'Top Selling Stationery',
      description: 'Pen, books & more',
      imageUrl:  '../../../../../assets/Child Store/pen.webp',
      price:'20000'
    }, {
      name: 'Tricycles & Rideons',
      description: 'Figunires, Battle Toys & more',
      imageUrl:  '../../../../../assets/Child Store/batman.webp',
      price:'4000'
    },
    {
      name: 'Soft Toys',
      description: 'Plus Toys & more',
      imageUrl:  '../../../../../assets/Child Store/toy.webp',
      price:'7949'
    }, 
    {
      name: 'Microphones',
      description: 'Explore now!!',
      imageUrl: '../../../../../assets/Child Store/mike.webp',
      price:'2000'
    },
   
    
    // Add more products as needed
  ];

  

  constructor(){}
  ngOnInit(): void {
    
  }
}
