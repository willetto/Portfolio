import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      title: 'Dr. Few Skincare',
      imgUrl: './assets/imgs/dr-few-screenshot.png',
      tags: ['Shopify', 'Custom API Integration'],
      description:
        'A custom Shopify theme that includes Shopify API usage. Design by GRIP, development by myself as part of Rebar.',
      liveLink: 'https://www.drfewskincare.com/',
    },
    {
      title: 'InFolk',
      imgUrl: './assets/imgs/infolk-screenshot.png',
      tags: ['SvelteKit', 'Storyblok', 'Sass'],
      description:
        'InFolk is a SvelteKit brochure site that uses Storyblok as a headless CMS. Design by Rule29, development by myself as part of Rebar.',
      liveLink: 'https://www.infolk.co/',
    },
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
