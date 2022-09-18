import { Component, OnInit } from '@angular/core';
import { FoodService } from './../services/food.service';
import { Foods } from '../share/model/food';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  foods: Foods[] = [];
  constructor(private dialog: MatDialog, private fs: FoodService, private router: ActivatedRoute,
    private Router: Router,
    private userService: UserService) { }


  ngOnInit(): void {
    this.router.params.subscribe(params => {
      if (params['searchItem'])
        this.foods = this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if (params['tag'])
        this.foods = this.fs.getAllFoodByTag(params['tag'])
      else {
        this.foods = this.fs.getAll();
      }
    })
    if (localStorage.getItem('token') != null) {
      this.userService.checkToken().subscribe((response:any)=>{
        this.Router.navigate(['/cafe/dashboard']);
      },(error:any)=>{
        console.log(error);
      })
    }
  }
  signupAction() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "550px";
    this.dialog.open(SignupComponent, dialogConfig);
  }
  loginAction() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "550px";
    this.dialog.open(LoginComponent, dialogConfig);
  }

}
