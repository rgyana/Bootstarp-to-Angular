import { Component, OnInit } from '@angular/core';
import { faEnvelope, faBell, faMagnifyingGlass, faFile, faCircleDollarToSlot, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faEnvelope = faEnvelope;
  faBell = faBell;
  faMagnifyingGlass = faMagnifyingGlass;
  faFile = faFile;
  faCircleDollarToSlot = faCircleDollarToSlot;
  faTriangleExclamation = faTriangleExclamation;

  constructor() { }

  ngOnInit(): void {
  }

}
