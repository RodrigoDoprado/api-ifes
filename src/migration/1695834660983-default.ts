import { MigrationInterface, QueryRunner } from "typeorm"

export class Default1695834660983 implements MigrationInterface {
  name = "Default1695834660983"

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "classes" ("id" SERIAL NOT NULL, "title" text NOT NULL, "acronym" text NOT NULL, "Shift" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "course_id" integer, CONSTRAINT "PK_e207aa15404e9b2ce35910f9f7f" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "students" ("id" SERIAL NOT NULL, "enroll" text NOT NULL, "firstName" text NOT NULL, "lastName" text NOT NULL, "avatar" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "course_id" integer, CONSTRAINT "PK_7d7f07271ad4ce999880713f05e" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "courses" ("id" SERIAL NOT NULL, "title" text NOT NULL, "acronym" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "teachers" ("id" SERIAL NOT NULL, "enroll" text NOT NULL, "firstName" text NOT NULL, "lastName" text NOT NULL, "avatar" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_a8d4f83be3abe4c687b0a0093c8" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "subjects" ("id" SERIAL NOT NULL, "avatar" text NOT NULL, "title" text NOT NULL, "acronym" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "teacher_subject" ("teacher_id" integer NOT NULL, "subject_id" integer NOT NULL, CONSTRAINT "PK_63df5db8af0e54ee767aeb623b8" PRIMARY KEY ("teacher_id", "subject_id"))`,
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_2a9d30cb4207da7ddf7c109097" ON "teacher_subject" ("teacher_id") `,
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_c876c0444684d4812824989ba2" ON "teacher_subject" ("subject_id") `,
    )
    await queryRunner.query(
      `CREATE TABLE "course_subject" ("course_id" integer NOT NULL, "subject_id" integer NOT NULL, CONSTRAINT "PK_246f5ea654b5aea3a3e747d087d" PRIMARY KEY ("course_id", "subject_id"))`,
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_00a5bee2c4b7053ae77478fe32" ON "course_subject" ("course_id") `,
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_49b3882567e1f74ddc36ff2d05" ON "course_subject" ("subject_id") `,
    )
    await queryRunner.query(
      `ALTER TABLE "classes" ADD CONSTRAINT "FK_bd4c6c725acd427f07264770ceb" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "students" ADD CONSTRAINT "FK_2a3ddf4de242a7cba3309a9acd6" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "teacher_subject" ADD CONSTRAINT "FK_2a9d30cb4207da7ddf7c109097a" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    )
    await queryRunner.query(
      `ALTER TABLE "teacher_subject" ADD CONSTRAINT "FK_c876c0444684d4812824989ba2c" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    )
    await queryRunner.query(
      `ALTER TABLE "course_subject" ADD CONSTRAINT "FK_00a5bee2c4b7053ae77478fe32c" FOREIGN KEY ("course_id") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    )
    await queryRunner.query(
      `ALTER TABLE "course_subject" ADD CONSTRAINT "FK_49b3882567e1f74ddc36ff2d05e" FOREIGN KEY ("subject_id") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "course_subject" DROP CONSTRAINT "FK_49b3882567e1f74ddc36ff2d05e"`,
    )
    await queryRunner.query(
      `ALTER TABLE "course_subject" DROP CONSTRAINT "FK_00a5bee2c4b7053ae77478fe32c"`,
    )
    await queryRunner.query(
      `ALTER TABLE "teacher_subject" DROP CONSTRAINT "FK_c876c0444684d4812824989ba2c"`,
    )
    await queryRunner.query(
      `ALTER TABLE "teacher_subject" DROP CONSTRAINT "FK_2a9d30cb4207da7ddf7c109097a"`,
    )
    await queryRunner.query(
      `ALTER TABLE "students" DROP CONSTRAINT "FK_2a3ddf4de242a7cba3309a9acd6"`,
    )
    await queryRunner.query(
      `ALTER TABLE "classes" DROP CONSTRAINT "FK_bd4c6c725acd427f07264770ceb"`,
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_49b3882567e1f74ddc36ff2d05"`,
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_00a5bee2c4b7053ae77478fe32"`,
    )
    await queryRunner.query(`DROP TABLE "course_subject"`)
    await queryRunner.query(
      `DROP INDEX "public"."IDX_c876c0444684d4812824989ba2"`,
    )
    await queryRunner.query(
      `DROP INDEX "public"."IDX_2a9d30cb4207da7ddf7c109097"`,
    )
    await queryRunner.query(`DROP TABLE "teacher_subject"`)
    await queryRunner.query(`DROP TABLE "subjects"`)
    await queryRunner.query(`DROP TABLE "teachers"`)
    await queryRunner.query(`DROP TABLE "courses"`)
    await queryRunner.query(`DROP TABLE "students"`)
    await queryRunner.query(`DROP TABLE "classes"`)
  }
}
