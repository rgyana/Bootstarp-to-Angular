import { Component, OnInit } from '@angular/core';
import { faCog, faWrench, faFolder, faChartArea, faTable, faGauge, faLaughWink } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  faCog = faCog;
  faWrench = faWrench;
  faFolder = faFolder;
  faChartArea = faChartArea;
  faTable = faTable;
  faGauge = faGauge;
  faLaughWink = faLaughWink;
}
