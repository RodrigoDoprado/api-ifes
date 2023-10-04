/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  OneToMany,
  ManyToMany,
  OneToOne,
  JoinColumn,
} from "typeorm"
import { ClassEntity } from "./ClassEntiry"
import { StudentEntity } from "./StudentEntiry"
import { TeacherEntity } from "./TeacherEntiry"

@Entity("courses") //curso
export class CourseEntity {
  @PrimaryGeneratedColumn()
  public id: string

  @Column({ type: "text", nullable: false })
  public avatar: string

  @Column({ type: "text", nullable: false })
  public title: string

  @Column({ type: "text", nullable: false })
  public acronym: string //sigla

  @OneToMany((type) => ClassEntity, (course) => course, { nullable: false })
  public classes: ClassEntity[]

  @OneToMany((type) => StudentEntity, (course) => course, { nullable: false })
  public students: StudentEntity[]

  @ManyToMany((type) => CourseEntity, (courses) => courses, { nullable: false })
  public subjects: CourseEntity[]

  @OneToOne((type) => TeacherEntity, (course) => course, { nullable: false })
  @JoinColumn({ name: "teacher_id", referencedColumnName: "id" })
  public teacher: TeacherEntity //professor orientador

  @CreateDateColumn()
  public created_at: Date // Creation date

  @UpdateDateColumn()
  public updated_at: Date // Last updated date

  @DeleteDateColumn()
  public deleted_at: Date // Deletion date
}
