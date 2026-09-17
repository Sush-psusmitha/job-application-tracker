import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import { redirect } from "next/navigation"
import { headers } from "next/headers";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please add your MongoDB URI to the environment variables (.env.local)");
}

declare global {
  var _mongoClient: MongoClient | undefined;
}

let client: MongoClient;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClient) {
    global._mongoClient = new MongoClient(uri);
  }
  client = global._mongoClient;
} else {
  client = new MongoClient(uri);
}

const db = client.db();

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000",
  secret: process.env.BETTER_AUTH_SECRET,
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
});

export async function getSession() {
  try {
    const result = await auth.api.getSession({
      headers: await headers(),
    });
    return result;
  } catch (error) {
    console.error("Error fetching session:", error);
    return null;
  }
}

export async function signOut() {
  const result = await auth.api.signOut({
    headers: await headers(),
  });
  if(result.success){
    redirect("/sign-in");
  }
}
