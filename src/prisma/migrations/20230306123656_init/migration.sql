/*
  Warnings:

  - A unique constraint covering the columns `[user_game_id]` on the table `User_game_biodata` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_game_id` to the `User_game_biodata` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User_game_biodata" ADD COLUMN     "user_game_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_game_biodata_user_game_id_key" ON "User_game_biodata"("user_game_id");

-- AddForeignKey
ALTER TABLE "User_game_biodata" ADD CONSTRAINT "User_game_biodata_user_game_id_fkey" FOREIGN KEY ("user_game_id") REFERENCES "User_game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
