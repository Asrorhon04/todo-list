import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgClass } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, NgForOf, NgClass],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  tasks: { name: string; completed: boolean }[] = [];
  newTask: string = '';

  addTask(): void {
    if (this.newTask.trim()) {
      this.tasks.push({ name: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  toggleTaskCompletion(index: number): void {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}