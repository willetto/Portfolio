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
      skill: 'html, css, JavaScript ES6, English,Spanish',
    },
    {
      title: 'Frameworks',
      skill: 'Angular, Sass, Open-Props, Bootstrap, Bulma',
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
