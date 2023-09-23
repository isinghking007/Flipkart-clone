import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  SideImagesIcons=['../../../../assets/Product/sp1.webp','../../../../assets/Product/sp2.webp','../../../../assets/Product/sp3.webp',
  '../../../../assets/Product/sp4.webp','../../../../assets/Product/sp5.webp','../../../../assets/Product/sp6.webp','../../../../assets/Product/sp7.webp'
,'../../../../assets/Product/sp8.webp','../../../../assets/Product/sp9.webp']

  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
