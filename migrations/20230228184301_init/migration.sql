-- CreateTable
CREATE TABLE "user_game" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_game_biodata" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "user_gameId" TEXT NOT NULL,

    CONSTRAINT "user_game_biodata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_game_history" (
    "id" SERIAL NOT NULL,
    "isWin" BOOLEAN NOT NULL DEFAULT false,
    "user_gameId" TEXT NOT NULL,

    CONSTRAINT "user_game_history_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_game_name_key" ON "user_game"("name");

-- CreateIndex
CREATE UNIQUE INDEX "user_game_email_key" ON "user_game"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_game_password_key" ON "user_game"("password");

-- CreateIndex
CREATE UNIQUE INDEX "user_game_biodata_address_key" ON "user_game_biodata"("address");

-- CreateIndex
CREATE UNIQUE INDEX "user_game_biodata_phone_key" ON "user_game_biodata"("phone");

-- AddForeignKey
ALTER TABLE "user_game_biodata" ADD CONSTRAINT "user_game_biodata_user_gameId_fkey" FOREIGN KEY ("user_gameId") REFERENCES "user_game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_game_history" ADD CONSTRAINT "user_game_history_user_gameId_fkey" FOREIGN KEY ("user_gameId") REFERENCES "user_game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
