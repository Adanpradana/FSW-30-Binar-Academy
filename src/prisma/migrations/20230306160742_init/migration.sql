-- DropForeignKey
ALTER TABLE "User_game_biodata" DROP CONSTRAINT "User_game_biodata_user_game_id_fkey";

-- AddForeignKey
ALTER TABLE "User_game_biodata" ADD CONSTRAINT "User_game_biodata_user_game_id_fkey" FOREIGN KEY ("user_game_id") REFERENCES "User_game"("id") ON DELETE CASCADE ON UPDATE CASCADE;
