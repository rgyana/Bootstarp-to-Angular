import { Component, OnInit } from '@angular/core';
import { faCheck, faF, faInfoCircle, faExclamationTriangle, faTrash, faFlag, faArrowRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faCheck = faCheck;
  faF = faF;
  faExclamationTriangle = faExclamationTriangle;
  faInfoCircle = faInfoCircle;
  faTrash = faTrash;
  faFlag = faFlag;
  faArrowRight = faArrowRight;
}
