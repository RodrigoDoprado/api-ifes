/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm"
import { StudentEntity } from "./StudentEntity"
import { TeacherEntity } from "./TeacherEntity"
import { PeriodEntity } from "./PeriodEntity"

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

  @OneToMany((type) => PeriodEntity, (course) => course, { nullable: false })
  public periods: PeriodEntity[] //períodos

  @OneToMany((type) => StudentEntity, (course) => course, { nullable: false })
  public students: StudentEntity[]

  @OneToOne((type) => TeacherEntity, (course) => course, { nullable: false })
  @JoinColumn({ name: "coordinator", referencedColumnName: "id" })
  public teacher: TeacherEntity //professor coordenador

  @CreateDateColumn()
  public created_at: Date // Creation date

  @UpdateDateColumn()
  public updated_at: Date // Last updated date

  @DeleteDateColumn()
  public deleted_at: Date // Deletion date
}