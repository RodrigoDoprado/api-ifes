import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("students")
export class Student {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  age: number
}
