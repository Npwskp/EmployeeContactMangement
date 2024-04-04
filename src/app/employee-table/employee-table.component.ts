import { Component } from '@angular/core';
import { EmployeeCardComponent } from '../employee-card/employee-card.component';
import { CommonModule } from '@angular/common';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [CommonModule, EmployeeCardComponent],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.scss',
})
export class EmployeeTableComponent {
  selectedEmployee?: Employee;

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService
      .getEmployees()
      .subscribe((employees) => (this.employees = employees));
  }
}
