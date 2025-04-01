-- CreateTable
CREATE TABLE "Pee" (
    "id" TEXT NOT NULL,
    "location" JSONB NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "user" TEXT NOT NULL,

    CONSTRAINT "Pee_pkey" PRIMARY KEY ("id")
);
