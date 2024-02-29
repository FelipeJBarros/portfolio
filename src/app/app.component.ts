import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ResumeComponent } from './components/resume/resume.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ContactsComponent, ResumeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-front';
}
