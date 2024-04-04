import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from '../employee';
import { FormsModule, NgModel } from '@angular/forms';

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

  constructor(public modal: NgbActiveModal) {}

  onSubmit() {
    this.submitted = true;
    this.modal.close();
  }
}
