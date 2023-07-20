import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
) {
  try {
    const session = await auth();
    const userId = session?.user.id
    const body = await req.json();

    const { title, description } = body;
    
    const imageUrl ="/"
    
    if(!userId){
      return new NextResponse("Unauthorized", { status: 401 })
    }

    if(!title) {
      return new NextResponse("Title is required", { status: 400 });
    }

    if(!description) {
      return new NextResponse("Description is required", { status: 400 });
    }

    if(!imageUrl) {
      return new NextResponse("Image URL is required", { status: 400 });
    }

    const user = await db.user.findUnique({
      where: {
        id: userId
      }
    })

    const store = await db.book.create({
      data: {
        title,
        description,
        imageUrl,
        authorId: userId
      }
    })

    return NextResponse.json(store)
    
  } catch (error) {
    console.log('[BOOKS_POST]', error)
    return new NextResponse("Internal error", { status: 500 })
  }
}