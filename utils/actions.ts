"use server";
import { redirect } from "next/navigation";

export async function filterProducts(key: string, value: any) {
  redirect(`/?${[key]}=${value}`);
}
