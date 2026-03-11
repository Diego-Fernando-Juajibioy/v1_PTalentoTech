import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../core/services/auth.service";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";


@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})

export class HomeComponent implements OnInit {

  role = "";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

    this.role = this.authService.getRole();

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}