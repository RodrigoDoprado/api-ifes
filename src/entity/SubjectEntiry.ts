/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm"
import { CourseEntity } from "./CourseEntiry"
import { TeacherEntity } from "./TeacherEntiry"

@Entity("subjects") //materias
export class SubjectEntiry {
  @PrimaryGeneratedColumn()
  public id: string

  @Column({ type: "text", nullable: false })
  public avatar: string

  @Column({ type: "text", nullable: false })
  public title: string

  @Column({ type: "text", nullable: false })
  public acronym: string //sigla

  @ManyToMany((type) => TeacherEntity, (subjects) => subjects)
  public teachers: TeacherEntity[]

  @ManyToMany((type) => CourseEntity, (subjects) => subjects)
  @JoinTable({
    name: "course_subject",
    joinColumn: {
      name: "course_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "subject_id",
      referencedColumnName: "id",
    },
  })
  public courses: CourseEntity[]

  @CreateDateColumn()
  public created_at: Date // Creation date

  @UpdateDateColumn()
  public updated_at: Date // Last updated date

  @DeleteDateColumn()
  public deleted_at: Date // Deletion date
}
