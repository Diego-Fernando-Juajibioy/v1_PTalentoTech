import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from '../../core/services/auth.service';
import { error } from "console";
@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
    username: string = "";
    password: string = "";
    errorMessage: string = "";

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit(): void {}

    login(): void {
        this.authService.login(this.username, this.password).subscribe(
            (success: any) => {
                if (success) {
                    this.router.navigate(['/home']);
                } else {
                    this.errorMessage = "Invalid username or password.";
                }
            },
            
            (error: any) => {
                this.errorMessage = "An error occurred during login. Please try again.";
            }
        );
    }
}