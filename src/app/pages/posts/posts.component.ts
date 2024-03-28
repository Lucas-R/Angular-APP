import { Component } from '@angular/core';
import { PostFormComponent } from '../../components/post-form/post-form.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostFormComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {}
