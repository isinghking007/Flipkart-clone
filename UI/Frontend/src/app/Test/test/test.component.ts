import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  multiValueDictionary: { [key: string]: string[] } = {
    "fruit": ["apple", "banana", "orange"],
    "color": ["red", "green", "blue"],
  };
  products = [
    {
      name: 'Product 1',
      description: 'Description for Product 1',
      imageUrl: 'assets/product1.jpg',
    },
    {
      name: 'Product 2',
      description: 'Description for Product 2',
      imageUrl: 'assets/product2.jpg',
    },
    {
      name: 'Product 3',
      description: 'Description for Product 3',
      imageUrl: 'assets/product3.jpg',
    },
    // Add more products as needed
  ];
  constructor(){}
  ngOnInit(): void {
    
  }
}
