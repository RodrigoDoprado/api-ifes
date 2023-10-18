/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  ManyToMany,
  JoinColumn,
  ManyToOne,
} from "typeorm"
import { PeriodEntity } from "./PeriodEntity"

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

  @ManyToOne((type) => PeriodEntity, (subjects) => subjects, {
    nullable: false,
  })
  @JoinColumn({ name: "period_id", referencedColumnName: "id" })
  public period: PeriodEntity

  @CreateDateColumn()
  public created_at: Date // Creation date

  @UpdateDateColumn()
  public updated_at: Date // Last updated date

  @DeleteDateColumn()
  public deleted_at: Date // Deletion date
}
