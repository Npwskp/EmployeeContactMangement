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
        EmployeeName: 'John Doe',
        Email: 'HelloWorld@gmail.com',
        PhoneNumber: '123-456-7890',
        JobTitle: 'Software Engineer',
      },
      {
        id: 2,
        EmployeeName: 'Jane Doe',
        Email: 'WorldHello@hotmail.com',
        PhoneNumber: '098-765-4321',
        JobTitle: 'Software Engineer',
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
