import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { ProjectComponent } from './projects/project/project.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { ViewTaskComponent } from './tasks/view-task/view-task.component';

const routes: Routes = [
  {path: 'addUser', component: UserComponent },
  {path: 'addProject', component: ProjectComponent},
  {path: 'addTask', component: AddTaskComponent},
  {path: 'viewTasks', component: ViewTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
