import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { PopupComponent } from 'src/app/Popup/popup/popup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public dialog: MatDialog){}
  openDialog()
  {
    this.dialog.open(PopupComponent)
  }

}
