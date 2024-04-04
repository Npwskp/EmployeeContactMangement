import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [
      {
        id: 1,
        firstname: 'John',
        lastname: 'Doe',
        email: 'asdfghjkl@xyz.com',
        phone: 1234567890,
        department: 'IT',
      },
      {
        id: 2,
        firstname: 'Jane',
        lastname: 'Doe',
        email: 'Zxcvbnm@xyz.com',
        phone: 1234567890,
        department: 'HR',
      },
    ];
    return { employees };
  }

  genId(employees: Employee[]): number {
    return employees.length > 0
      ? Math.max(...employees.map((employee) => employee.id)) + 1
      : 0;
  }
}
