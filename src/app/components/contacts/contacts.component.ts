import { Component } from '@angular/core';
import { LinkedinComponent } from '../icons/linkedin/linkedin.component';
import { GithubComponent } from '../icons/github/github.component';
import { InstagramComponent } from '../icons/instagram/instagram.component';
import { MailComponent } from '../icons/mail/mail.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    LinkedinComponent,
    GithubComponent,
    InstagramComponent,
    MailComponent
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

}
