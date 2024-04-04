import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateModalComponent } from '../update-modal/update-modal.component';
import { AddModalComponent } from '../add-modal/add-modal.component';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [CommonModule, UpdateModalComponent, AddModalComponent],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.scss',
})
export class EmployeeTableComponent {
  selectedEmployee?: Employee;

  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private modal: NgbModal
  ) {}

  fetchEmployee() {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees;
      console.log(employees);
    });
  }

  ngOnInit() {
    this.fetchEmployee();
  }

  ngOnChanges() {
    this.fetchEmployee();
  }

  deleteEmployee(employee: Employee) {
    this.employeeService.deleteEmployee(employee.id).subscribe();
    this.fetchEmployee();
  }

  updateEmployee(employee: Employee) {
    if (employee) {
      this.selectedEmployee = employee;
    }
    const modalRef = this.modal.open(UpdateModalComponent);
    modalRef.componentInstance.selectedEmployee = this.selectedEmployee;
  }

  addEmployee() {
    const modalRef = this.modal.open(AddModalComponent);
    this.fetchEmployee();
  }
}
