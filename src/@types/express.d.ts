import { Employee } from "../entity/Employee"

declare global {
  namespace Express {
    export interface Request {
      employeeA: Partial<Employee>
      employee: Partial<Employee>
    }
  }
}
