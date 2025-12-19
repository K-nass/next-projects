import {
  editQuestionAndAnswer,
  getQuestionsAndAnswersById,
} from "@/app/actions";

export default async function editForm({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const currentQuestionAndAnswer = await getQuestionsAndAnswersById(id);
  const editPostById = editQuestionAndAnswer.bind(null, id);
  return (
    <form action={editPostById} className="flex flex-col gap-4 mt-10">
      <h2 className="text-xl font-bold mb-6 text-gray-800">
        Edit Q&A : {currentQuestionAndAnswer?.question}
      </h2>
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
          defaultValue={currentQuestionAndAnswer?.question}
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
          defaultValue={currentQuestionAndAnswer?.answer}
          required
        />
      </div>

      <button className="bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors">
        save changes
      </button>
    </form>
  );
}
