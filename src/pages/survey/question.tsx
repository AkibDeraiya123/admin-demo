import React, { useState } from 'react';
import { CiCircleMinus, CiCirclePlus, CiImageOn } from 'react-icons/ci';

function QuestionForm() {
    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState(['', '', '']);

    const handleQuestionChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setQuestion(e.target.value);
    };

    const handleAnswerChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const newAnswers = [...answers];
        newAnswers[index] = e.target.value;
        setAnswers(newAnswers);
    };

    const addAnswerField = () => {
        setAnswers([...answers, '']);
    };

    const removeAnswerField = (index: number) => {
        setAnswers(answers.filter((_, i) => i !== index));
    };

    return (
        <div className="p-4 mt-4 w-full rounded-xl shadow-md bg-white">
            <h2 className="text-2xl font-bold mb-4">Add Question</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Enter your question:</label>
                <div className="flex flex-wrap mt-2 items-center gap-3">
                    <input
                        type="text"
                        value={question}
                        onChange={handleQuestionChange}
                        placeholder='Enter your question'
                        className="w-full border border-[#E7E8EA] bg-[#F4F4F4] text-white max-w-md rounded-md p-3"
                    />
                    <div className="border py-[10px] px-4 rounded-lg border-[#E7E8EA] bg-[#F4F4F4]">
                        <CiImageOn className='text-2xl font-extrabold' />
                    </div>
                    <div className="">
                        <select name="" className='p-3 bg-[#F4F4F4] border-[#E7E8EA] rounded-lg'>
                            <option value="Multiple Choice">Multiple Choice</option>
                            <option value="Single Choice">Single Choice</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-semibold">Answer Choices</h3>
                {answers.map((answer, index) => (
                    <div key={index} className="flex items-center mt-2 gap-3">
                        <input
                            type="text"
                            value={answer}
                            placeholder='Enter Answer Choices'
                            onChange={(e) => handleAnswerChange(index, e)}
                            className="w-full border bg-[#F4F4F4] border-[#E7E8EA] text-white max-w-md rounded-md p-3"
                        />
                        {answers.length > 1 && (
                            <div className="flex items-center gap-2">
                                <button onClick={addAnswerField}>
                                    <CiCirclePlus className='font-semibold text-2xl' />
                                </button>
                                <button onClick={() => removeAnswerField(index)}>
                                    <CiCircleMinus className='font-semibold text-2xl' />
                                </button>
                            </div>
                        )}
                    </div>
                ))}
                <button
                    onClick={addAnswerField}
                    className="mt-6 flex justify-center items-center gap-2 border rounded-3xl py-2 px-6"
                >
                    <CiCirclePlus className='font-semibold text-xl' /> Bulk Answers
                </button>
            </div>
            <div className="">
                <h3 className="text-lg font-semibold mb-5">Answer Choices</h3>
                <div className="flex gap-2 flex-wrap">
                    <div className="flex items-center px-8 rounded-3xl border border-gray-200 dark:border-gray-700 ">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Add &quot;Other&quot; Answer Choice</label>
                    </div>
                    <div className="flex items-center px-8 rounded-3xl border border-gray-200 dark:border-gray-700 ">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">&quot;Skippable&quot; Question</label>
                    </div>
                    <div className="flex items-center px-8 rounded-3xl border border-gray-200 dark:border-gray-700 ">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">&quot;None of the Above&quot; Option</label>
                    </div>
                </div>
            </div>
            {/* Action Buttons */}
          <div className="mt-6 flex justify-end gap-4 pt-15 pb-6">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Save Question</button>
          </div>
        </div>
    );
}

export default QuestionForm;
