import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TaskListComponent } from '../task-list/task-list.component';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tab-group',
  standalone: true,
  imports: [MatTabsModule, TaskListComponent, AddTaskComponent],
  templateUrl: './tab-group.component.html',
  styleUrl: './tab-group.component.css'
})
export class TabGroupComponent {

}
