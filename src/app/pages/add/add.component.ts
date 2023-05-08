import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  constructor(
    private dataService: DataServiceService,
    private router: Router
  ) {}

  lastName: string = '';
  firstName: string = '';
  middleName: string = '';
  position: string = '';
  employees: any[] = this.dataService.employees;

  handleSubmit = (e: Event) => {
    e.preventDefault();

    let id = 1;

    if (this.employees.length > 0) {
      id = this.employees[this.employees.length - 1].id + 1;
    }

    const data = {
      id: id,
      lastName: this.lastName,
      firstName: this.firstName,
      middleName: this.middleName,
      position: this.position,
    };

    this.dataService.employees.push(data);
    localStorage.setItem(
      'employees',
      JSON.stringify(this.dataService.employees)
    );
    this.router.navigate(['/']);
  };
}
