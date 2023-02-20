import React from "react";
import { useNavigate } from "react-router-dom";
import { RoutesBread } from "@/misc";
import { useCurrentRoutes } from "@/utils/hooks";
import * as COMPONENT from "@/components";

export default function CreatePengguna() {
  const navigate = useNavigate();
  const routes = useCurrentRoutes();

  return (
    <COMPONENT.PageContainer>
      <div className="w-full rounded-md bg-white p-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-slate-600">Pengguna</h1>
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
        <form action="#" className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label htmlFor="namaLengkap" className="w-fit mb-1">
              Nama Lengkap<span className="text-red-600 font-bold">*</span>
            </label>
            <input
              type="text"
              name="namaLengkap"
              id="namaLengkap"
              placeholder="Nama Lengkap"
              required
              className="w-1/2 border p-3 rounded"
            />
          </div>
          <div className="flex gap-5">
            <div className="w-fit flex flex-col">
              <label htmlFor="tempatLahir" className="w-fit mb-1">
                Tempat Lahir<span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                name="tempatLahir"
                id="tempatLahir"
                placeholder="Tempat Lahir"
                required
                className="border p-3 rounded"
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
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="w-fit mb-1">
              Email<span className="text-red-600 font-bold">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              className="w-1/2 border p-3 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="role" className="w-fit mb-1">
              Role<span className="text-red-600 font-bold">*</span>
            </label>
            <select name="role" id="role" className="w-1/2 border p-3 rounded">
              <option disabled selected hidden>
                Pilih Salah Satu
              </option>
              <option value="01">Admin</option>
              <option value="02">User</option>
            </select>
          </div>
          <div className="flex justify-end items-end gap-5 mt-10">
            <button className="bg-blue-600 hover:bg-blue-500 py-3 px-16 rounded-md text-white">
              Simpan Data
            </button>
            <button className="bg-red-600 hover:bg-red-500 py-3 px-16 rounded-md text-white">
              Batal
            </button>
          </div>
        </form>
      </div>
    </COMPONENT.PageContainer>
  );
}
