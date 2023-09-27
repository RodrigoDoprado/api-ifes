/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  JoinTable,
  ManyToMany,
} from "typeorm"
import { SubjectEntiry } from "./SubjectEntiry"

@Entity("teachers")
export class TeacherEntity {
  @PrimaryGeneratedColumn()
  public id: string

  @Column({ type: "text", nullable: false })
  public enroll: string //matricula

  @Column({ type: "text", nullable: false })
  public firstName: string

  @Column({ type: "text", nullable: false })
  public lastName: string

  @Column({ type: "text", nullable: false })
  public avatar: string

  @ManyToMany((type) => SubjectEntiry, (teachers) => teachers)
  @JoinTable({
    name: "teacher_subject",
    joinColumn: {
      name: "teacher_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "subject_id",
      referencedColumnName: "id",
    },
  })
  public subjects: SubjectEntiry[]

  @CreateDateColumn()
  public created_at: Date // Creation date

  @UpdateDateColumn()
  public updated_at: Date // Last updated date

  @DeleteDateColumn()
  public deleted_at: Date // Deletion date
}
