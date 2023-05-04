import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route.js";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.redirect({
      message: "You are not logged in",
      status: 302,
      url: "/signin",
    });
  }

  return NextResponse.redirect({ name: session.user.name });
}
