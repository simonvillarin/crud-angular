import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service/data-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  constructor(private dataService: DataServiceService) {}

  employees: any[] = this.dataService.employees;
  search: any = '';

  ngOnInit(): void {
    const localEmployees = localStorage.getItem('employees');
    if (localEmployees) {
      this.employees = JSON.parse(localEmployees);
      this.dataService.employees = JSON.parse(localEmployees);
    }
  }

  handleDelete = (id: string) => {
    const filterEmployees = this.employees.filter(
      (employee) => employee.id != id
    );
    this.dataService.employees = filterEmployees;
    localStorage.setItem(
      'employees',
      JSON.stringify(this.dataService.employees)
    );
    this.employees = filterEmployees;
  };
}
