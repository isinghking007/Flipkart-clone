import { Component, ElementRef, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionPanel } from '@angular/material/expansion';



import { PopupComponent } from 'src/app/Popup/popup/popup.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    
  }
  panelOpenState = false;

  togglePanel(panel:MatExpansionPanel)
  {
    if(panel)
    {
      console.log(panel.toggle());
      panel.toggle();
    }
    else{
      console.log(panel);
    }
  }
}
