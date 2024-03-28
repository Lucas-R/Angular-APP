import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgIf],
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
}
