import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  jobs = [
    {
      company: 'Array',
      title: 'Web Developer',
      location: 'Denver',
      description: ' ',
    },
    {
      company: 'Digital Engagement with Youth',
      title: 'Consultant',
      location: 'Denver',
      description: ' ',
    },
    {
      company: 'STRIVE Prep Sunnyside',
      title: 'Middle School Teacher ',
      location: 'Denver',
      description: ' ',
    },
    {
      company: 'International NGO',
      title: 'Team Member and Fundraiser',
      location: 'Mangochi, Malawi',
      description: ' ',
    },
    {
      // prettier-ignore
      company: "New Hope Children’s Home",
      title: 'Volunteer',
      location: 'Arequipa, Peru',
      description: ' ',
    },
    {
      company: 'Midway High School ',
      title: 'English Teacher',
      location: 'Waco, TX',
      description: ' ',
    },
  ];
}
