import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(
    private userService: UserService,
    private router: Router
  ) {}
  login(){
    this.userService.getUsers().subscribe(users => {
      const user = users.find((u:any) =>
        u.username === this.username && u.password === this.password
      );

      if(user){

        if(user.role === 'ADMIN'){
          this.router.navigate(['/home']);
        }

        else{
          this.router.navigate(['/home']);
        }

      }
      else{
        alert("Usuario o contraseña incorrectos");
      }
    });
  }
}