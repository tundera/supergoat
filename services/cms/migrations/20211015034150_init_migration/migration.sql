-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "email" TEXT NOT NULL DEFAULT E'',
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3),
    "name" TEXT NOT NULL DEFAULT E'',
    "handle" TEXT NOT NULL DEFAULT E'',
    "slug" TEXT NOT NULL DEFAULT E'',
    "city" TEXT NOT NULL DEFAULT E'',
    "abbreviation" TEXT NOT NULL DEFAULT E'',
    "conference" TEXT NOT NULL DEFAULT E'',
    "division" TEXT NOT NULL DEFAULT E'',
    "established" TEXT NOT NULL DEFAULT E'',
    "wins" INTEGER,
    "losses" INTEGER,
    "winPercentage" DOUBLE PRECISION,
    "colorScheme" TEXT,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3),
    "name" TEXT NOT NULL DEFAULT E'',
    "handle" TEXT NOT NULL DEFAULT E'',
    "slug" TEXT NOT NULL DEFAULT E'',
    "height" TEXT NOT NULL DEFAULT E'',
    "weight" TEXT NOT NULL DEFAULT E'',
    "number" TEXT NOT NULL DEFAULT E'',
    "position" TEXT NOT NULL DEFAULT E'',
    "team" TEXT,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coach" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3),
    "name" TEXT NOT NULL DEFAULT E'',
    "handle" TEXT NOT NULL DEFAULT E'',
    "type" TEXT NOT NULL DEFAULT E'',
    "isAssistant" TEXT NOT NULL DEFAULT E'',
    "team" TEXT,
    "image" TEXT,

    CONSTRAINT "Coach_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ColorScheme" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3),
    "primary" TEXT NOT NULL DEFAULT E'',
    "secondary" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "ColorScheme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3),
    "url" TEXT NOT NULL DEFAULT E'',
    "type" TEXT,
    "player" TEXT,
    "team" TEXT,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Team_name_key" ON "Team"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Team_handle_key" ON "Team"("handle");

-- CreateIndex
CREATE UNIQUE INDEX "Team_slug_key" ON "Team"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Team_abbreviation_key" ON "Team"("abbreviation");

-- CreateIndex
CREATE INDEX "Team_colorScheme_idx" ON "Team"("colorScheme");

-- CreateIndex
CREATE UNIQUE INDEX "Player_name_key" ON "Player"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Player_handle_key" ON "Player"("handle");

-- CreateIndex
CREATE UNIQUE INDEX "Player_slug_key" ON "Player"("slug");

-- CreateIndex
CREATE INDEX "Player_team_idx" ON "Player"("team");

-- CreateIndex
CREATE UNIQUE INDEX "Coach_name_key" ON "Coach"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Coach_handle_key" ON "Coach"("handle");

-- CreateIndex
CREATE UNIQUE INDEX "Coach_image_key" ON "Coach"("image");

-- CreateIndex
CREATE INDEX "Coach_team_idx" ON "Coach"("team");

-- CreateIndex
CREATE UNIQUE INDEX "Image_url_key" ON "Image"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Image_player_key" ON "Image"("player");

-- CreateIndex
CREATE UNIQUE INDEX "Image_team_key" ON "Image"("team");

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_colorScheme_fkey" FOREIGN KEY ("colorScheme") REFERENCES "ColorScheme"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_team_fkey" FOREIGN KEY ("team") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coach" ADD CONSTRAINT "Coach_team_fkey" FOREIGN KEY ("team") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coach" ADD CONSTRAINT "Coach_image_fkey" FOREIGN KEY ("image") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_player_fkey" FOREIGN KEY ("player") REFERENCES "Player"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_team_fkey" FOREIGN KEY ("team") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
