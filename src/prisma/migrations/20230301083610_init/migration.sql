-- CreateTable
CREATE TABLE "User_game" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_game_biodata" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "User_game_biodata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_game_history" (
    "id" SERIAL NOT NULL,
    "isWin" BOOLEAN NOT NULL DEFAULT false,
    "score" INTEGER NOT NULL,

    CONSTRAINT "User_game_history_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_game_name_key" ON "User_game"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_game_email_key" ON "User_game"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_game_password_key" ON "User_game"("password");

-- CreateIndex
CREATE UNIQUE INDEX "User_game_biodata_address_key" ON "User_game_biodata"("address");

-- CreateIndex
CREATE UNIQUE INDEX "User_game_biodata_phone_key" ON "User_game_biodata"("phone");
