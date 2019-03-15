import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  
  ngOnInit() {
    
  }

  go_aboutme(){
    let e = document.getElementById("about_me");
    e.scrollIntoView({ block: 'start',  behavior: 'smooth' });
  }

  go_skills(){
    let e = document.getElementById("skills");
    e.scrollIntoView({ block: 'start',  behavior: 'smooth' });
  }

  go_projects(){
    let e = document.getElementById("projects");
    e.scrollIntoView({ block: 'start',  behavior: 'smooth' });
  }

  go_blog(){
    let e = document.getElementById("my_blog");
    e.scrollIntoView({ block: 'start',  behavior: 'smooth' });
  }

  go_contact(){
    let e = document.getElementById("contact");
    e.scrollIntoView({ block: 'start',  behavior: 'smooth' });
  }

}
