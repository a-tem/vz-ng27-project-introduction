import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Confirm} from '@shared/decorators/confirm.decorator';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  @Confirm('Discard all changes')
  cancelAction() {
    this.router.navigate(['admin/products-list']);
  }

  saveChanges() {
    this.router.navigate(['admin/products-list']);
  }

}
