import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { bookId: string} }
) {
  try {
    const session = await auth();
    const userId = session?.user.id
    const body = await req.json();

    const { title, description } = body;

    if(!userId){
      return new NextResponse("Unauthorized", { status: 401 })
    }

    if(!title) {
      return new NextResponse('Title is required', { status: 400 })
    }

    if(!description) {
      return new NextResponse('Description is required', { status: 400 })
    }

    if(!params.bookId){
      return new NextResponse('Book id is required', { status: 400 })
    }

    const store = await db.book.updateMany({
      where: {
        id: params.bookId,
        authorId: userId
      },
      data: {
        title,
        description
      }
    })
    
    return NextResponse.json(store)
  } catch (error) {
    console.log('[BOOK_PATCH]', error)
    return new NextResponse("Internal error", { status: 500 })
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: { bookId: string} }
) {
  try {
    const session = await auth();
    const userId = session?.user.id

    if(!userId){
      return new NextResponse("Unauthorized", { status: 401 })
    }

    if(!params.bookId){
      return new NextResponse('Book id is required', { status: 400 })
    }

    const store = await db.book.deleteMany({
      where: {
        id: params.bookId,
        authorId: userId
      }
    })
    
    return NextResponse.json(store)
  } catch (error) {
    console.log('[BOOK_DELETE]', error)
    return new NextResponse("Internal error", { status: 500 })
  }
}