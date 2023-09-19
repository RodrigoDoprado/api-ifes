import { MigrationInterface, QueryRunner } from "typeorm"

export class Default1695144133982 implements MigrationInterface {
  name = "Default1695144133982"

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "students" DROP CONSTRAINT "FK_e0873a013b581c08e6d7db77cbb"`,
    )
    await queryRunner.query(
      `ALTER TABLE "classes" DROP CONSTRAINT "FK_b067a9847c3a1d4e1efc681585d"`,
    )
    await queryRunner.query(
      `ALTER TABLE "students" RENAME COLUMN "curse_id" TO "course_id"`,
    )
    await queryRunner.query(
      `ALTER TABLE "classes" RENAME COLUMN "curse_id" TO "course_id"`,
    )
    await queryRunner.query(
      `ALTER TABLE "students" ADD CONSTRAINT "FK_2a3ddf4de242a7cba3309a9acd6" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "classes" ADD CONSTRAINT "FK_bd4c6c725acd427f07264770ceb" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "classes" DROP CONSTRAINT "FK_bd4c6c725acd427f07264770ceb"`,
    )
    await queryRunner.query(
      `ALTER TABLE "students" DROP CONSTRAINT "FK_2a3ddf4de242a7cba3309a9acd6"`,
    )
    await queryRunner.query(
      `ALTER TABLE "classes" RENAME COLUMN "course_id" TO "curse_id"`,
    )
    await queryRunner.query(
      `ALTER TABLE "students" RENAME COLUMN "course_id" TO "curse_id"`,
    )
    await queryRunner.query(
      `ALTER TABLE "classes" ADD CONSTRAINT "FK_b067a9847c3a1d4e1efc681585d" FOREIGN KEY ("curse_id") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "students" ADD CONSTRAINT "FK_e0873a013b581c08e6d7db77cbb" FOREIGN KEY ("curse_id") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }
}
