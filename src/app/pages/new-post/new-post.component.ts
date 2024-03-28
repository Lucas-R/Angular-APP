import { Component } from '@angular/core';
import { PostFormComponent } from '../../components/post-form/post-form.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostFormComponent],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {}
