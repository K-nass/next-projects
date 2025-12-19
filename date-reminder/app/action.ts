"use server";

import { redirect } from "next/navigation";
import { appointments } from "./data";
import { revalidatePath } from "next/cache";

export async function createAppointment(formData: FormData) {
  const title = formData.get("title");
  const date = formData.get("date");

  if (!title || !date) {
    return;
  }
  appointments.push({
    id: Math.random().toString(),
    title: String(title),
    date: String(date),
  });
  revalidatePath("/");
}

export async function deleteAppointment(fomData: FormData) {
  const appointmentId = fomData.get("id");
  const index = appointments.findIndex((app) => app.id === appointmentId);
  if (index !== -1) {
    appointments.splice(index, 1);
  }
  revalidatePath("/");
}
