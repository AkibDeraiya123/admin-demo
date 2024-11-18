import DefaultLayout from '@/layout/DefaultLayout'
import { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import QuestionForm from './question';

const SurveyPage = () => {
  const [date, setDate] = useState('');

  return (
    <DefaultLayout heading='Survey'>
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-4 items-center">
            <button className='font-extrabold'>Edit</button>
            <button >Share</button>
            <button className='hidden lg:block'>Results</button>
            <button className='hidden lg:block'>Insights</button>
          </div>
          <div className="flex gap-4 items-center">
            <label className="inline-flex items-center justify-center cursor-pointer border rounded-2xl py-1 px-2">
              <span className="ms-3 mx-4 font-medium text-gray-900 dark:text-gray-300">Preview Survey</span>
            </label>
          </div>
        </div>
        <div className=" mt-5">
          {/* Cover Image Section */}
          <div className="p-6 bg-white shadow-md rounded-lg">
            <div className="">
              <button className='flex items-center gap-2 bg-yellow-300 text-black px-8 font-medium py-2 rounded-2xl' >
                <CiCirclePlus className='font-semibold text-2xl' />
                Logo
              </button>
            </div>
            <div className="my-6">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 max-w-3xl">
                <div className='py-4'>
                  <label className="block font-medium mb-1 text-xl">Survey Title</label>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full border bg-[#F4F4F4] border-[#E7E8EA] max-w-2xl rounded-md p-3"
                    placeholder='Enter title: e.g Social Anxiety Assessment'
                  />
                </div>
                <div className='py-4'>
                  <label className="block font-medium mb-1 text-xl">Survey Category</label>
                  <select name="" className="w-full border border-[#E7E8EA] bg-[#F4F4F4] max-w-md rounded-md p-3">
                    <option value="">Select a Category</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>

                </div>
              </div>
              <div className="w-full">
                <div className='py-4'>
                  <label className="block font-medium mb-1 text-xl">Survey Category</label>
                  <textarea
                    rows={6}
                    className="w-full border border-[#E7E8EA] bg-[#F4F4F4] max-w-2xl rounded-md p-2"
                    placeholder='Enter description: e.g Take this assessment to find out if you may have symptoms of social anxiety.'
                  />
                </div>
              </div>
            </div>
          </div>
          <QuestionForm />
        </div>
      </div>
    </DefaultLayout>
  )
}

export default SurveyPage