import { Component, OnInit } from '@angular/core';
import {AdminService} from '@app/admin/services/admin.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  ordersList;
  ordersListArray = [];

  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
    this.ordersList = this.adminService.getStoredOrders();

    if (this.ordersList) {
      const keys = Object.keys(this.ordersList);
      const values = Object.values(this.ordersList);

      this.ordersListArray = keys.map((key, index) => ({
        key,
        value: values[index]
      }));
    }
  }

}
