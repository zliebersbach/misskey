/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

export class UserDisplayHost1745326802315 {
		name = 'UserDisplayHost1745326802315'

    async up(queryRunner) {
			await queryRunner.query(`ALTER TABLE "user" ADD "canonicalHost" character varying(128)`);
    }

    async down(queryRunner) {
			await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "canonicalHost"`);
    }
}
