/*
  Warnings:

  - Added the required column `gender` to the `User_game_biodata` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `phone` on the `User_game_biodata` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User_game_biodata" ADD COLUMN     "gender" TEXT NOT NULL,
DROP COLUMN "phone",
ADD COLUMN     "phone" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_game_biodata_phone_key" ON "User_game_biodata"("phone");
