import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { ROCPService } from '../services/rocp.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentHero = 'no hero';

  todos = new FormGroup({
    title: new FormControl('')
  });

  constructor(private route: ActivatedRoute, private rocp: ROCPService) { }
  postTodosEc2(todoSub: FormGroup) {
    //this.rocp.postTodo()
    let form = JSON.stringify(todoSub.value);
    this.rocp.postTodo(form).subscribe(
      response => { console.log('success'); }
    );
  }
  getTodosEc2() {
    this.rocp.getTodos().subscribe(
      response => {
        console.log('button pressed');
        console.log(response);
      }
    )
  }

  ngOnInit(): void {
    this.currentHero = this.route.snapshot.paramMap.get('heroname');
  }

}
