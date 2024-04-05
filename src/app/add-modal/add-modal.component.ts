import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from '../employee';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-modal',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './add-modal.component.html',
  styleUrl: './add-modal.component.scss',
})
export class AddModalComponent {
  @Input() lastId!: number;

  InputEmployee: Employee = {
    id: 0,
    EmployeeName: '',
    Email: '',
    PhoneNumber: '',
    JobTitle: '',
  };

  submitted = false;

  constructor(
    public modal: NgbActiveModal,
    private employeeService: EmployeeService
  ) {}

  onSubmit() {
    this.submitted = true;
    console.log(this.InputEmployee);
    this.employeeService
      .addEmployee(this.InputEmployee)
      .subscribe(() => this.modal.close());
  }
}
