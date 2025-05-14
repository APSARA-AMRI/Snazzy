import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications = [
    'Your order #1234 has shipped.',
    'A new product has been added.',
    'Your profile was updated successfully.'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
