import { appointments } from "../data";



export async function GET() {
  return Response.json(appointments);
}
