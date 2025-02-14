import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [
    {
      "id": 1,
      "name": "Neil Sims",
      "avatar": "neil-sims.png",
      "email": "neil.sims@windster.com",
      "position": "Front-end developer",
      "country": "United States",
      "status": "Active"
    },
    {
      "id": 2,
      "name": "Roberta Casas",
      "avatar": "roberta-casas.png",
      "email": "roberta.casas@windster.com",
      "position": "Designer",
      "country": "Spain",
      "status": "Active"
    },
    {
      "id": 3,
      "name": "Michael Gough",
      "avatar": "michael-gough.png",
      "email": "michael.gough@windster.com",
      "position": "React developer",
      "country": "United Kingdom",
      "status": "Active"
    },
    {
      "id": 4,
      "name": "Jese Leos",
      "avatar": "jese-leos.png",
      "email": "jese.leos@windster.com",
      "position": "Marketing",
      "country": "United States",
      "status": "Active"
    },
    {
      "id": 5,
      "name": "Bonnie Green",
      "avatar": "bonnie-green.png",
      "email": "bonnie.green@windster.com",
      "position": "UI/UX Engineer",
      "country": "Australia",
      "status": "Offline"
    },
    {
      "id": 6,
      "name": "Thomas Lean",
      "avatar": "thomas-lean.png",
      "email": "thomas.lean@windster.com",
      "position": "Vue developer",
      "country": "Germany",
      "status": "Active"
    },
    {
      "id": 7,
      "name": "Helene Engels",
      "avatar": "helene-engels.png",
      "email": "helene.engels@windster.com",
      "position": "Product owner",
      "country": "Canada",
      "status": "Active"
    },
    {
      "id": 8,
      "name": "Lana Byrd",
      "avatar": "lana-byrd.png",
      "email": "lana.byrd@windster.com",
      "position": "Designer",
      "country": "United States",
      "status": "Active"
    },
    {
      "id": 9,
      "name": "Leslie Livingston",
      "avatar": "leslie-livingston.png",
      "email": "leslie.livingston@windster.com",
      "position": "Web developer",
      "country": "France",
      "status": "Offline"
    },
    {
      "id": 10,
      "name": "Robert Brown",
      "avatar": "robert-brown.png",
      "email": "robert.brown@windster.com",
      "position": "Laravel developer",
      "country": "Russia",
      "status": "Active"
    },
    {
      "id": 11,
      "name": "Neil Sims",
      "avatar": "neil-sims.png",
      "email": "neil.sims@windster.com",
      "position": "Front-end developer",
      "country": "United States",
      "status": "Active"
    },
    {
      "id": 12,
      "name": "Roberta Casas",
      "avatar": "roberta-casas.png",
      "email": "roberta.casas@windster.com",
      "position": "Designer",
      "country": "Spain",
      "status": "Active"
    },
    {
      "id": 13,
      "name": "Michael Gough",
      "avatar": "michael-gough.png",
      "email": "michael.gough@windster.com",
      "position": "React developer",
      "country": "United Kingdom",
      "status": "Active"
    },
    {
      "id": 14,
      "name": "Jese Leos",
      "avatar": "jese-leos.png",
      "email": "jese.leos@windster.com",
      "position": "Marketing",
      "country": "United States",
      "status": "Active"
    },
    {
      "id": 15,
      "name": "Bonnie Green",
      "avatar": "bonnie-green.png",
      "email": "bonnie.green@windster.com",
      "position": "UI/UX Engineer",
      "country": "Australia",
      "status": "Offline"
    },
    {
      "id": 16,
      "name": "Thomas Lean",
      "avatar": "thomas-lean.png",
      "email": "thomas.lean@windster.com",
      "position": "Vue developer",
      "country": "Germany",
      "status": "Active"
    },
    {
      "id": 17,
      "name": "Helene Engels",
      "avatar": "helene-engels.png",
      "email": "helene.engels@windster.com",
      "position": "Product owner",
      "country": "Canada",
      "status": "Active"
    },
    {
      "id": 18,
      "name": "Lana Byrd",
      "avatar": "lana-byrd.png",
      "email": "lana.byrd@windster.com",
      "position": "Designer",
      "country": "United States",
      "status": "Active"
    },
    {
      "id": 19,
      "name": "Leslie Livingston",
      "avatar": "leslie-livingston.png",
      "email": "leslie.livingston@windster.com",
      "position": "Web developer",
      "country": "France",
      "status": "Offline"
    },
    {
      "id": 20,
      "name": "Robert Brown",
      "avatar": "robert-brown.png",
      "email": "robert.brown@windster.com",
      "position": "Laravel developer",
      "country": "Russia",
      "status": "Active"
    }
  ];


  user_modal = false;
  del_user_modal = false;
  add_user_modal = false;

  constructor() { }

  ngOnInit(): void {
  }

}
