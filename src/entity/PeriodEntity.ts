/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm"
import { CourseEntity } from "./CourseEntity"
import { SubjectEntiry } from "./SubjectEntity"

@Entity("periods") //curso
export class PeriodEntity {
  @PrimaryGeneratedColumn()
  public id: string

  @Column({ type: "text", nullable: false })
  public title: string

  @ManyToOne((type) => CourseEntity, (periods) => periods, { nullable: false })
  @JoinColumn({ name: "course_id", referencedColumnName: "id" })
  public course: CourseEntity

  @OneToMany((type) => SubjectEntiry, (period) => period)
  public subjects: SubjectEntiry[]
}
