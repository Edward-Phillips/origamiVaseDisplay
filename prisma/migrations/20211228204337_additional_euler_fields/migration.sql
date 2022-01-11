-- AlterTable
ALTER TABLE `eulerproblem` ADD COLUMN `difficulty` INTEGER NULL,
    ADD COLUMN `link` VARCHAR(191) NULL,
    ADD COLUMN `statement` VARCHAR(9999) NULL,
    ADD COLUMN `thoughts` VARCHAR(9999) NULL;
