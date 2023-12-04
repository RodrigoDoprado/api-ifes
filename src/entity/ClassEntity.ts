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
  OneToMany,
} from "typeorm"
@Entity("classes") //turmas
export class ClassEntity {
  @PrimaryGeneratedColumn()
  public id: string

  @Column({ type: "text", nullable: false })
  public title: string

  @Column({ type: "text", nullable: false })
  public acronym: string //sigla

  @Column({ type: "text", nullable: false })
  public shift: string //turno

  @Column({ type: "text", nullable: false })
  public state: string //estado

  // @ManyToOne((type) => PeriodEntity, (classEntity) => classEntity)
  // @JoinColumn({ name: "period_id", referencedColumnName: "id" })
  // public period: PeriodEntity

  // @ManyToOne((type) => CourseEntity, (classes) => classes, { nullable: false })
  // @JoinColumn({ name: "course_id", referencedColumnName: "id" })
  // public course: CourseEntity

  // @OneToMany((type) => StudentEntity, (classEntity) => classEntity)
  // public students: StudentEntity[]

  @CreateDateColumn()
  public created_at: Date // Creation date

  @UpdateDateColumn()
  public updated_at: Date // Last updated date

  @DeleteDateColumn()
  public deleted_at: Date // Deletion date
}
