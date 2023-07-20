import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
) {
  try {
    const session = await auth();
    const userId = session?.user.id
    const body = await req.json();

    const { username } = body;
    
    if(!userId){
      return new NextResponse("Unauthorized", { status: 401 })
    }

    if(!username) {
      return new NextResponse("Username is required", { status: 400 });
    }


    const user = await db.user.findUnique({
      where: {
        id: userId
      }
    })

    const updateUsername = await db.user.update({
      where: {
        id: userId
      },
      data: {
        username: username
      }
    })

    return NextResponse.json(updateUsername)
    
  } catch (error) {
    console.log('[USERNAME_POST]', error)
    return new NextResponse("Internal error", { status: 500 })
  }
}