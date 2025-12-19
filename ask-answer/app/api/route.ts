import { questionsAndAnswers } from "../data";

export async function GET() {
  return Response.json(questionsAndAnswers);
}
