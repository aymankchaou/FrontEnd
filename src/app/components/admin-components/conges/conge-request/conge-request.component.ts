import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conge } from 'src/app/modals/conge';
import { Employe } from 'src/app/modals/employe';
import { CongeService } from 'src/app/services/conge.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-conge-request',
  templateUrl: './conge-request.component.html',
  styleUrls: ['./conge-request.component.css']
})
export class CongeRequestComponent implements OnInit {

  id: any;
  conge: Conge = new Conge();
  employe: Employe = new Employe();
  commentaire: string;

  constructor(private route: ActivatedRoute,
    private congeService: CongeService, private userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getConge();
  }
  onSubmit() {
  }
  getConge() {
    console.log(this.id);
    this.congeService.getConge(this.id).subscribe(
      response => {
        this.conge = response;
      }
    );
  }

  onAcceptConge() {
    this.congeService.acceptConge(this.id)
      .subscribe((conge) => {
        this.userService.toastMessage("Holiday accepted")
      }, (error) => {
        this.userService.toastMessage("failed action")
      }
      );
  };

  onRefuseConge() {
    this.congeService.refuseConge(this.id, this.commentaire)
      .subscribe(() => {
        this.userService.toastMessage("Holiday refused")
      }, (error) => {
        this.userService.toastMessage("failed action")
      }
      );
  }
  ;
}
