import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills = [
    {
      title: 'Languages',
      skill: 'JavaScript ES6, HTML, CSS, English, Spanish',
    },
    {
      title: 'Frameworks',
      skill: 'Svelte, Angular, Sass, Open-Props, Bootstrap',
    },
    {
      title: 'Design',
      skill: 'Photoshop, Illustrator, Premiere, After Effects, Figma',
    },
    {
      title: 'Admin',
      skill:
        'Google Workspace, Git, Google Analytics, Notion, Mailchimp, Slack',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
