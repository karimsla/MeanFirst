import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  OnloginButton(email:string,password:string){
    console.log("onlogin button")
    this.service.login(email,password).subscribe( (res:HttpResponse<any>)=>{
      console.log(res);
      if(res.status===200)
      this.router.navigateByUrl("/lists")
    });

  }
}
