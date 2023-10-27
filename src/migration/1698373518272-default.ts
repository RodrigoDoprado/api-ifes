import { MigrationInterface, QueryRunner } from "typeorm"

export class Default1698373518272 implements MigrationInterface {
  name = "Default1698373518272"

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "students" DROP COLUMN "email"`)
    await queryRunner.query(`ALTER TABLE "teachers" DROP COLUMN "email"`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "teachers" ADD "email" text NOT NULL`)
    await queryRunner.query(`ALTER TABLE "students" ADD "email" text NOT NULL`)
  }
}
