-- AlterTable
ALTER TABLE `eulerproblem` ADD COLUMN `difficulty` INTEGER NULL,
    ADD COLUMN `link` VARCHAR(191) NULL,
    ADD COLUMN `statement` TEXT(5000) NULL,
    ADD COLUMN `thoughts` TEXT(5000) NULL;
