import { Component, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/Popup/popup/popup.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
 
 
  constructor(public dialog: MatDialog){}
  ngOnInit(): void {
    
  }
  openDialog() {
    this.dialog.open(PopupComponent);
  }
}
