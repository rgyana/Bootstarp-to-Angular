import { Component, OnInit } from '@angular/core';
import { faCalendar, faDollarSign, faClipboardList, faComments, faDownload, faEllipsisVertical, faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faCalender = faCalendar;
  faDollarSign = faDollarSign;
  faClipboardList = faClipboardList;
  faComments = faComments;
  faDownload = faDownload;
  faEllipsisVertical = faEllipsisVertical;
  faCircle = faCircle;
}
