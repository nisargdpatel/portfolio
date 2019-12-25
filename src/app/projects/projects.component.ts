import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = PROJECTS;
  temp = "assets/project_logo.jpg";
  constructor() { }

  ngOnInit() {
  }

}


export const PROJECTS: Project[] = [
  {
    name: "Connect 4",
    description: "...description...",
    date: "...date...",
    status: "Complete",
    imgsrc: "assets/connect4.PNG"
  },
  {
    name: "Project 2",
    description: "...description...",
    date: "...date...",
    status: "Complete",
    imgsrc: "assets/project_logo.jpg"
  },
  {
    name: "Project 3",
    description: "...description...",
    date: "...date...",
    status: "Complete",
    imgsrc: "#"
  },
  {
    name: "Project 4",
    description: "...description...",
    date: "...date...",
    status: "Complete",
    imgsrc: "#"
  },
  {
    name: "Project 5",
    description: "...description...",
    date: "...date...",
    status: "Complete",
    imgsrc: "#"
  },
  {
    name: "Project 6",
    description: "...description...",
    date: "...date...",
    status: "Complete",
    imgsrc: "#"
  }
]


export class Project {
  public name: string;
  public description: string;
  public date: string;
  public status: string;
  public imgsrc: string;
}