import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from '../employee';
import { FormControl, FormGroup, FormsModule, NgModel } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-modal',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './update-modal.component.html',
  styleUrl: './update-modal.component.scss',
})
export class UpdateModalComponent {
  @Input() selectedEmployee!: Employee;

  submitted = false;

  constructor(
    public modal: NgbActiveModal,
    private employeeService: EmployeeService
  ) {}

  onSubmit() {
    const updatedEmployee = this.selectedEmployee;
    this.employeeService.updateEmployee(updatedEmployee).subscribe(() => {
      this.submitted = true;
      this.modal.close();
    });
  }
}
