import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service/data-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  constructor(
    private dataService: DataServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  employees: any[] = this.dataService.employees;
  lastName: string = '';
  firstName: string = '';
  middleName: string = '';
  position: string = '';
  id: string = '';

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      const filterData = this.employees.filter(
        (employee) => employee.id == params['id']
      );
      this.lastName = filterData[0].lastName;
      this.firstName = filterData[0].firstName;
      this.middleName = filterData[0].middleName;
      this.position = filterData[0].position;
    });
  }

  handleSubmit = (e: Event) => {
    e.preventDefault();

    const findEmployee = this.employees.find(
      (employee) => employee.id == this.id
    );
    const index = this.employees.indexOf(findEmployee);

    this.employees[index].lastName = this.lastName;
    this.employees[index].firstName = this.firstName;
    this.employees[index].middleName = this.middleName;
    this.employees[index].position = this.position;

    this.dataService.employees = this.employees;
    localStorage.setItem(
      'employees',
      JSON.stringify(this.dataService.employees)
    );
    this.router.navigate(['/']);
    e;
  };
}
