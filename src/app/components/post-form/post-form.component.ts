import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';


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
  formPost = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  })

  constructor(){
    this.formPost.valueChanges.subscribe(val => console.log(val));
  }

  onSubmit() {
  }
}
