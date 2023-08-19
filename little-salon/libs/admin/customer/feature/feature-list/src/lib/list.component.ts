import { Component, OnInit, inject } from '@angular/core';
import { CustomerFacade } from '@admin/customer/data-access';
import { Observable } from 'rxjs';
import { Customer } from '@admin/customer/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'little-salon-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ListComponent implements OnInit {    
  private readonly facade: CustomerFacade = inject(CustomerFacade);

  customers$!: Observable<Customer[]>;

  ngOnInit(): void {
    this.customers$ = this.facade.getCustomers();
  }
}
