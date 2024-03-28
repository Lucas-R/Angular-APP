import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgIf, NgFor, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() label?: string;
  @Input() name!: string;
  @Input() type!: string;
  @Input() id!: string;
  @Input() placeholder?: string;
  @Input() rows?: string;
  @Input() control = new FormControl();

  errorsMessages: Record<string, string> = {
    required: "Campo necessário"
  }
}
