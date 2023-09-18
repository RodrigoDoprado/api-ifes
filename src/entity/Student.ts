import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
} from "typeorm"

@Entity("students")
export class Student {
  @PrimaryGeneratedColumn()
  public id: string

  @Column({type: "text", nullable: true })
  public firstName: string

  @Column({type: "text", nullable: true })
  public lastName: string

  @Column({ type: "text", nullable: true })
  public avatar: string


  @CreateDateColumn()
  public created_at: Date // Creation date

  @UpdateDateColumn()
  public updated_at: Date // Last updated date

  @DeleteDateColumn()
  public deleted_at: Date // Deletion date
}

