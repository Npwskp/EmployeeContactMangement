import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-modal',
  standalone: true,
  imports: [NgFor],
  templateUrl: './update-modal.component.html',
  styleUrl: './update-modal.component.scss',
})
export class UpdateModalComponent {
  constructor(public modal: NgbActiveModal) {}
}
