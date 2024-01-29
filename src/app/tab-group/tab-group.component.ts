import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TaskListComponent } from '../task-list/task-list.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { ThemePalette } from '@angular/material/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab-group',
  standalone: true,
  imports: [MatTabsModule, TaskListComponent, AddTaskComponent, RouterLink],
  templateUrl: './tab-group.component.html',
  styleUrl: './tab-group.component.css'
})
export class TabGroupComponent {
  links = [
    {
      name: "Tasks",
      path: '',
    },
    {
      name: "Add Task",
      path: "add-task",
    }
  ]
  activeLink = this.links[0].name;
  background: ThemePalette = undefined;

}

