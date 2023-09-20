/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  OneToMany,
} from "typeorm"
import { ClassEntity } from "./ClassEntiry"
import { StudentEntity } from "./StudentEntiry"

@Entity("courses") //curso
export class CourseEntity {
  @PrimaryGeneratedColumn()
  public id: string

  @Column({ type: "text", nullable: false })
  public title: string

  @Column({ type: "text", nullable: false })
  public acronym: string //sigla

  @OneToMany((type) => ClassEntity, (course) => course)
  public classes: ClassEntity[]

  @OneToMany((type) => StudentEntity, (course) => course)
  public students: StudentEntity[]

  @CreateDateColumn()
  public created_at: Date // Creation date

  @UpdateDateColumn()
  public updated_at: Date // Last updated date

  @DeleteDateColumn()
  public deleted_at: Date // Deletion date
}