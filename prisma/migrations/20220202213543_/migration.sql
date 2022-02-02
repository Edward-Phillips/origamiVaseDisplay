-- AlterTable
ALTER TABLE `eulerproblem` ADD COLUMN `title` TEXT NULL,
    MODIFY `function` TEXT NOT NULL,
    MODIFY `comment` TEXT NOT NULL,
    MODIFY `link` TEXT NULL;
