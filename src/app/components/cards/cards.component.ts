import { Component, OnInit } from '@angular/core';
import { faCalendar, faDollarSign, faClipboardList, faComments,faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faCalender = faCalendar;
  faDollarSign = faDollarSign;
  faClipboardList = faClipboardList;
  faComments = faComments;
  faEllipsisVertical = faEllipsisVertical;
}
