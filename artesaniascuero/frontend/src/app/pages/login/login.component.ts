import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login() {

    this.authService.login(this.username, this.password)
      .subscribe(success => {

        if (success) {
          this.router.navigate(['/home']);
        }
        else {
          alert("Credenciales incorrectas");
        }

      });

  }

}