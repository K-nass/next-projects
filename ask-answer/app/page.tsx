import Link from "next/link";
import { addQuestionAnAnswer } from "./actions";
import { questionsAndAnswers } from "./data";

export default async function Home() {
  questionsAndAnswers;
  return (
    <main className="min-h-screen bg-gray-50 flex">
      <section className="w-1/3 p-8 border-r bg-white shadow-sm">
        <h2 className="text-xl font-bold mb-6 text-gray-800">Add New Entry</h2>
        <form action={addQuestionAnAnswer} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label
              className="text-sm font-medium text-gray-600 mb-1"
              htmlFor="question"
            >
              Question
            </label>
            <input
              className="border rounded-md p-2 outline-blue-500"
              type="text"
              name="question"
              id="question"
              placeholder="e.g. What is Next.js?"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              className="text-sm font-medium text-gray-600 mb-1"
              htmlFor="answer"
            >
              Answer
            </label>
            <input
              className="border rounded-md p-2 outline-blue-500"
              type="text"
              name="answer"
              id="answer"
              placeholder="e.g. A React framework."
              required
            />
          </div>

          <button className="bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors">
            Add to List
          </button>
        </form>
      </section>

      <section className="w-2/3 p-8">
        <h2 className="text-xl font-bold mb-6 text-gray-800">
          Questions & Answers
        </h2>
        <div className="grid gap-4">
          {questionsAndAnswers.length === 0 && (
            <p className="text-gray-400">No items found.</p>
          )}
          {questionsAndAnswers.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg border shadow-sm flex justify-between items-center gap-2"
            >
              <div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-bold uppercase">
                    Q
                  </span>
                  <p className="text-gray-800 font-medium">{item.question}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold uppercase">
                    A
                  </span>
                  <p className="text-gray-600 italic">{item.answer}</p>
                </div>
              </div>
              <div>
                <Link
                  href={`/edit/${item.id}`}
                  className="cursor-pointer bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 p-2"
                >
                  edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
