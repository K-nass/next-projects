import { createAppointment, deleteAppointment } from "./action";
import Form from "next/form";
import { appointments } from "./data";

export default async function Home() {
  return (
    <div className="bg-black/20 flex flex-col justify-between items-center mt-10">
      <div className="bg-white text-black p-20">
        <p className="italic text-green-600">list of appointments</p>
        <ul className="mt-3">
          {appointments.map((app) => (
            <li
              className="flex items-center italic text-green-400 font-bold gap-2"
              key={app.id}
            >
              <span>{app.title}: </span>
              <span>{app.date}</span>
              <Form action={deleteAppointment}>
                <input type="hidden" name="id" value={app.id} />
                <button className="text-red-400 cursor-pointer" type="submit">x</button>
              </Form>
            </li>
          ))}
        </ul>
        <Form className="flex flex-col mt-10 gap-5" action={createAppointment}>
          <label className="text-amber-600 font-bold" htmlFor="title">
            title
          </label>
          <input
            className="bg-blue-200 p-2"
            type="text"
            id="title"
            name="title"
            required
          />
          <label className="text-amber-600 font-bold" htmlFor="date">
            date
          </label>
          <input type="date" name="date" id="date" required />
          <button
            className="bg-green-400 p-2 text-white font-bold"
            type="submit"
          >
            Add Appointment
          </button>
        </Form>
      </div>
    </div>
  );
}
