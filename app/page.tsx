import { redirect } from "next/navigation";
import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient()

export default async function Home() {
  const count = await prisma.Users.count();
  if (count > 0){
    redirect('/Login')
  }
  else{
    redirect('/Register')
  }
  return ( null

      // <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      // </main>
  );
}
