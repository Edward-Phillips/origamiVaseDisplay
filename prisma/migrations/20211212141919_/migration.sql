-- CreateTable
CREATE TABLE `eulerproblem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `function` VARCHAR(9999) NOT NULL,
    `comment` VARCHAR(191) NOT NULL,
    `number` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
