import { Component, OnInit } from "@angular/core";
import { UserService } from "../../core/services/user.service";
import { OrderService } from "../../core/services/order.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    usersCount: number = 0;
    ordersCount: number = 0;

    constructor(private userService: UserService, private orderService: OrderService) {}

    ngOnInit(): void {
        this.loadUsersCount();
        this.loadOrdersCount();
    }

    private loadUsersCount(): void {
        this.userService.getUsers().subscribe(users => {
            this.usersCount = users.length;
        });
    }

    private loadOrdersCount(): void {
        this.orderService.getOrders().subscribe(orders => {
            this.ordersCount = orders.length;
        });
    }
}