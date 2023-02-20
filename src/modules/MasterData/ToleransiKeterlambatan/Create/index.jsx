import React from "react";

export default function CreateToleransiKeterlambatan() {
  return (
    <div className="w-full">
      <div className="w-full rounded-lg bg-white p-6 shadow-lg">
        <div className="w-full flex flex-col gap-4 max-w-[300px]">
          <div>
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Toleransi Keterlambatan (menit)
              <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}
