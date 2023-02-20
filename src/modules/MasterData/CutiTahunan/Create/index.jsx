import React from "react";
import { useNavigate } from "react-router-dom";
import { RoutesBread } from "@/misc";
import { useCurrentRoutes } from "@/utils/hooks";

export default function CreateCutiTahunan() {
  const navigate = useNavigate();
  const routes = useCurrentRoutes();

  return (
    <div>
      <div className="w-full rounded-md bg-white p-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-slate-600">Cuti Tahunan</h1>
          <RoutesBread routes={routes} />
        </div>
        <div className="flex items-center gap-4 mt-2 mb-4 py-4 border-t-2 border-b-2">
          <button
            onClick={() => navigate(-1)}
            className="py-1 px-10 bg-gray-600 hover:bg-gray-500 rounded text-white"
          >
            Kembail
          </button>
          <h2 className="text-lg font-semibold">Tambah Data</h2>
        </div>
        <form action="#" className="flex flex-col h-[calc(100vh-303px)] gap-5">
          <div className="flex flex-col">
            <label htmlFor="namaHariLibur" className="w-fit mb-1">
              Nama Hari Libur<span className="text-red-600 font-bold">*</span>
            </label>
            <input
              type="text"
              name="namaHariLibur"
              id="namaHariLibur"
              placeholder="Nama Hari Libur"
              required
              className="w-1/2 border p-3 rounded"
            />
          </div>
          <div className="w-fit flex flex-col">
            <label htmlFor="tanggalLibur" className="w-fit mb-1">
              Tanggal<span className="text-red-600 font-bold">*</span>
            </label>
            <input
              type="date"
              name="tanggalLibur"
              id="tanggalLibur"
              required
              className="border p-3 rounded"
            />
          </div>
          <div className="flex justify-end items-end mt-auto gap-5">
            <button className="bg-blue-600 hover:bg-blue-500 py-3 px-16 rounded-md text-white">
              Simpan Data
            </button>
            <button className="bg-red-600 hover:bg-red-500 py-3 px-16 rounded-md text-white">
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
