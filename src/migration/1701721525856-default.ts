import { MigrationInterface, QueryRunner } from "typeorm"

export class Default1701721525856 implements MigrationInterface {
  name = "Default1701721525856"

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "classes" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_e207aa15404e9b2ce35910f9f7f" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "students" ("id" SERIAL NOT NULL, "avatar" text NOT NULL, "enroll" text NOT NULL, "firstName" text NOT NULL, "lastName" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "course_id" integer NOT NULL, CONSTRAINT "PK_7d7f07271ad4ce999880713f05e" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "teachers" ("id" SERIAL NOT NULL, "avatar" text NOT NULL, "enroll" text NOT NULL, "firstName" text NOT NULL, "lastName" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_a8d4f83be3abe4c687b0a0093c8" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "subjects" ("id" SERIAL NOT NULL, "avatar" text NOT NULL, "title" text NOT NULL, "acronym" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "period_id" integer NOT NULL, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "periods" ("id" SERIAL NOT NULL, "title" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "course_id" integer NOT NULL, CONSTRAINT "PK_86c6afb6c818d97dc321898627c" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "courses" ("id" SERIAL NOT NULL, "avatar" text NOT NULL, "title" text NOT NULL, "acronym" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "teacher_id" integer, CONSTRAINT "REL_fad76a730ee7f68d0a59652fb1" UNIQUE ("teacher_id"), CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `ALTER TABLE "students" ADD CONSTRAINT "FK_2a3ddf4de242a7cba3309a9acd6" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "subjects" ADD CONSTRAINT "FK_f9db75a00bf67b296be74649f45" FOREIGN KEY ("period_id") REFERENCES "periods"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "periods" ADD CONSTRAINT "FK_3bf0f98c507bb671c8cff75e922" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "courses" ADD CONSTRAINT "FK_fad76a730ee7f68d0a59652fb12" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "courses" DROP CONSTRAINT "FK_fad76a730ee7f68d0a59652fb12"`,
    )
    await queryRunner.query(
      `ALTER TABLE "periods" DROP CONSTRAINT "FK_3bf0f98c507bb671c8cff75e922"`,
    )
    await queryRunner.query(
      `ALTER TABLE "subjects" DROP CONSTRAINT "FK_f9db75a00bf67b296be74649f45"`,
    )
    await queryRunner.query(
      `ALTER TABLE "students" DROP CONSTRAINT "FK_2a3ddf4de242a7cba3309a9acd6"`,
    )
    await queryRunner.query(`DROP TABLE "courses"`)
    await queryRunner.query(`DROP TABLE "periods"`)
    await queryRunner.query(`DROP TABLE "subjects"`)
    await queryRunner.query(`DROP TABLE "teachers"`)
    await queryRunner.query(`DROP TABLE "students"`)
    await queryRunner.query(`DROP TABLE "classes"`)
  }
}
