import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      title: 'Rocky Montaño Portfolio',
      imgUrl: './assets/imgs/rocky-screenshot.png',
      tags: [
        'Site Design',
        'Sass',
        'Vanilla JS',
        'API Integration',
        'Image optimized',
      ],
      description:
        "A custom designed photography portfolio. I'm proudest of the gallery that integrates the clients most recent IG posts. Also, check out the gradient buttons that match the brand colors.",
      liveLink: 'https://www.rockymontano.com/',
    },
    {
      title: 'Forkify: Recipe App',
      imgUrl: './assets/imgs/forkify-screenshot.png',
      tags: ['Vanilla JS', 'API Integration'],
      description:
        'My capstone project from a Udemy JS course. Design by Jonas Schmedtmann, functionality by myself.',
      liveLink: 'https://forkify-willetto.netlify.app/',
      repoLink: 'https://github.com/willetto/Forkify',
    },
    {
      title: 'Typing Game',
      imgUrl: './assets/imgs/typing-screenshot.png',
      tags: ['Angular', 'Open Props'],
      description:
        'Project from Angular Udemy course. This project used Faker.js to generate the Lorem string.I replaced that with a (much) smaller NPM package to deploy.',
      liveLink: 'https://willetto-typing.netlify.app/',
      repoLink: 'https://github.com/willetto/typing-game',
    },
    {
      title: 'Expense Chart Component',
      imgUrl: './assets/imgs/chart-screenshot.png',
      tags: ['Vanilla JS', 'Chart.js'],
      description:
        'A custom bar chart based on imported JSON data. Data was made for the project, but would be integrated with an API.',
      liveLink: 'https://willetto.github.io/Frontend-Mentor-Chart-Component/',
      repoLink: 'https://github.com/willetto/Frontend-Mentor-Chart-Component',
    },
    {
      title: 'Rating Component',
      imgUrl: './assets/imgs/rating-screenshot.png',
      tags: ['Vanilla JS', 'CSS Animations'],
      description:
        'Small project to practice getting inputs from the DOM and using CSS.',
      liveLink: 'https://willetto.github.io/Frontend-Mentor-Ratings/',
      repoLink: 'https://github.com/willetto/Frontend-Mentor-Ratings',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
