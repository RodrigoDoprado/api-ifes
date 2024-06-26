/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm"
import { CourseEntity } from "./CourseEntity"

@Entity("students")
export class StudentEntity {
  @PrimaryGeneratedColumn()
  public id: string

  @Column({ type: "text", nullable: false })
  public avatar: string

  @Column({ type: "text", nullable: false })
  public enroll: string //matricula

  @Column({ type: "text", nullable: false })
  public firstName: string

  @Column({ type: "text", nullable: false })
  public lastName: string

  // @ManyToOne((type) => ClassEntity, (students) => students, { nullable: false })
  // @JoinColumn({ name: "class_id", referencedColumnName: "id" })
  // public classEntity: ClassEntity

  @ManyToOne((type) => CourseEntity, (students) => students, {
    nullable: false,
  })
  @JoinColumn({ name: "course_id", referencedColumnName: "id" })
  public course: CourseEntity

  @CreateDateColumn()
  public created_at: Date // Creation date

  @UpdateDateColumn()
  public updated_at: Date // Last updated date

  @DeleteDateColumn()
  public deleted_at: Date // Deletion date
}
