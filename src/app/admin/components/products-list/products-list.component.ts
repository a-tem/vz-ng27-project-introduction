import { Component, OnInit } from '@angular/core';
import {AdminService} from '@app/admin/services/admin.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
  }

}
