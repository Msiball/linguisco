"use server";

import User from "@/app/db/models/users";
import { connect } from "@/app/db/db";

export async function createUser(user: any) {
  try {
    await connect();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.error("Error creating user:", error);
  }
}
