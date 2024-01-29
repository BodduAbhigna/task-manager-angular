import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks = [
    {
      id: Number(Math.floor(Math.random()*100)),
      title: 'title 1',
      description: "dummy text dummy text dummy text dummy text"
    },
    {
      id: Number(Math.floor(Math.random()*100)),
      title: 'title 2',
      description: "dummy text dummy text dummy text dummy text"
    },
    {
      id: Number(Math.floor(Math.random()*100)),
      title: 'title 3',
      description: "dummy text dummy text dummy text dummy text"
    },
    {
      id: Number(Math.floor(Math.random()*100)),
      title: 'title 4',
      description: "dummy text dummy text dummy text dummy text"
    },
    {
      id: Number(Math.floor(Math.random()*100)),
      title: 'title 5',
      description: "dummy text dummy text dummy text dummy text"
    }
  ]

}
