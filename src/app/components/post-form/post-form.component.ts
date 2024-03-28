import { Component, Input } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';


@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [
    InputComponent, 
    ButtonComponent,
  ],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  onSubmit() {}
}
