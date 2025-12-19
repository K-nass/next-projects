"use server";

import { revalidatePath } from "next/cache";
import { questionsAndAnswers } from "./data";
import { redirect } from "next/navigation";

export async function addQuestionAnAnswer(formData: FormData) {
  const question = String(formData.get("question"));
  const answer = String(formData.get("answer"));
  if (!question || !answer) {
    return;
  }
  const newQuestionAndAnswer = {
    id: Date.now().toString(),
    question: question,
    answer: answer,
  };
  questionsAndAnswers.push(newQuestionAndAnswer);
  revalidatePath("/");
}

export async function getQuestionsAndAnswersById(id: string) {
  const questionsAndAnswer = questionsAndAnswers.find((item) => item.id === id);
  return questionsAndAnswer;
}
export async function editQuestionAndAnswer(id: string, formData: FormData) {
  const question = String(formData.get("question"));
  const answer = String(formData.get("answer"));
  const index = questionsAndAnswers.findIndex((item) => item.id === id);
  if (index !== -1) {
    questionsAndAnswers[index] = {
      id: id,
      question: question,
      answer: answer,
    };
  }
  revalidatePath("/");
  redirect("/");
}
