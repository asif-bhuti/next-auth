import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Page = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/signin?callbackUrl=/profile");
  }

  return (
    <div className="py-24">
      <h1 className="text-3xl font-bold">Profile</h1>
      <p className="mt-8">This is a protected page.</p>
    </div>
  );
};
