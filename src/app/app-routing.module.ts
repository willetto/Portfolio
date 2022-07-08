import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 1 },
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { animation: 2 },
  },
  {
    path: 'skills',
    component: SkillsComponent,
    data: { animation: 3 },
  },
  {
    path: 'resume',
    component: ResumeComponent,
    data: { animation: 4 },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 5 },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
