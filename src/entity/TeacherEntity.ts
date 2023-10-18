/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  OneToOne,
} from "typeorm"
import { CourseEntity } from "./CourseEntity"

@Entity("teachers")
export class TeacherEntity {
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

  @OneToOne((type) => CourseEntity, (teacher) => teacher)
  public course: CourseEntity //curso que firstName é o coordenador

  @CreateDateColumn()
  public created_at: Date // Creation date

  @UpdateDateColumn()
  public updated_at: Date // Last updated date

  @DeleteDateColumn()
  public deleted_at: Date // Deletion date
}
