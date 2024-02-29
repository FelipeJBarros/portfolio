import { Component } from '@angular/core';
import { JavaComponent } from '../icons/java/java.component';
import { JavascriptComponent } from '../icons/javascript/javascript.component';
import { TypescriptComponent } from '../icons/typescript/typescript.component';
import { AngularComponent } from '../icons/angular/angular.component';
import { SpringComponent } from '../icons/spring/spring.component';
import { ReactComponent } from '../icons/react/react.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    AngularComponent,
    JavaComponent,
    JavascriptComponent,
    ReactComponent,
    SpringComponent,
    TypescriptComponent
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

}
