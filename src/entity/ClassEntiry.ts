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
import { CourseEntity } from "./CourseEntiry"

@Entity("classes") //turmas
export class ClassEntity {
  @PrimaryGeneratedColumn()
  public id: string

  @Column({ type: "text", nullable: false })
  public title: string

  @Column({ type: "text", nullable: false })
  public acronym: string //sigla

  @Column({ type: "text", nullable: false })
  public Shift: string //turno

  @ManyToOne((type) => CourseEntity, (classes) => classes, {
    eager: true,
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
