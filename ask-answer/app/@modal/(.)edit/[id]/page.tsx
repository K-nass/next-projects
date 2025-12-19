import {
  editQuestionAndAnswer,
  getQuestionsAndAnswersById,
} from "@/app/actions";
import Button from "../../Button";

export default async function EditModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const currentQuestionAndAnswer = await getQuestionsAndAnswersById(id);
  const editPostById = editQuestionAndAnswer.bind(null, id);
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
        <div className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl">
            <Button label="x"/>
        </div>
        <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-2">
          Edit '{currentQuestionAndAnswer?.question}' question
        </h2>
        <form action={editPostById} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label
              className="text-sm font-medium text-gray-600 mb-1"
              htmlFor="question"
            >
              Question
            </label>
            <input
              className="border rounded-md p-2 outline-blue-500 text-gray-800"
              type="text"
              name="question"
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
              className="border rounded-md p-2 outline-blue-500 text-gray-800"
              type="text"
              name="answer"
              defaultValue={currentQuestionAndAnswer?.answer}
              required
            />
          </div>
          <div className="flex gap-2 mt-2">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Save Changes
            </button>
            <Button label="cancel" />
          </div>
        </form>
      </div>
    </div>
  );
}
