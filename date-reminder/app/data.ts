export interface Appointment {
  id: string;
  title: string;
  date: string;
}

export const appointments: Appointment[] = [
  { id: "1", title: "study", date: new Date().toDateString() },
];
