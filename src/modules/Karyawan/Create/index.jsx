import React from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentRoutes } from "@/utils/hooks";
import { RoutesBread } from "@/misc";
import * as COMPONENT from "@/components";

export default function CreateKaryawan() {
  const navigate = useNavigate();
  const routes = useCurrentRoutes();

  return (
    <COMPONENT.PageContainer>
      <div className="w-full rounded-md bg-white p-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-slate-600">Karyawan</h1>
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
        <form action="#">
          <div className="my-5">
            <div className="flex flex-col gap-4 mx-5">
              <div className="flex items-center justify-between">
                <div className="w-1/2 flex flex-col mr-5">
                  <label htmlFor="namaLengkap" className="w-fit mb-1">
                    Nama Lengkap
                    <span className="text-red-600 font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    name="namaLengkap"
                    id="namaLengkap"
                    placeholder="Nama Lengkap"
                    required
                    className="border p-3 rounded"
                  />
                </div>
                <div className="w-1/2 flex flex-col ml-5">
                  <label htmlFor="provinsi" className="w-fit mb-1">
                    Provinsi<span className="text-red-600 font-bold">*</span>
                  </label>
                  <select
                    name="provinsi"
                    id="provinsi"
                    required
                    className="border p-3 rounded"
                  >
                    <option disabled selected hidden>
                      Pilih Salah Satu
                    </option>
                    <option value="01">DKI Jakarta</option>
                    <option value="28">Bandung</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-1/2 flex gap-5 mr-5">
                  <div className="flex flex-col">
                    <label htmlFor="tempatLahir" className="w-fit mb-1">
                      Tempat Lahir
                      <span className="text-red-600 font-bold">*</span>
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
                  <div className="flex flex-col">
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
                <div className="w-1/2 flex flex-col ml-5">
                  <label htmlFor="kotaKabupaten" className="w-fit mb-1">
                    Kota / Kabupaten
                    <span className="text-red-600 font-bold">*</span>
                  </label>
                  <select
                    name="kotaKabupaten"
                    id="kotaKabupaten"
                    required
                    className="border p-3 rounded"
                  >
                    <option disabled selected hidden>
                      Pilih Salah Satu
                    </option>
                    <option value="01">DKI Jakarta</option>
                    <option value="28">Bandung</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-1/2 flex flex-col mr-5">
                  <label htmlFor="lakiLaki" className="w-fit mb-1">
                    Jenis Kelamin
                    <span className="text-red-600 font-bold">*</span>
                  </label>
                  <div className="flex gap-5">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="jenisKelamin"
                        id="lakiLaki"
                        required
                        className="w-fit border p-3 rounded"
                      />
                      <label htmlFor="lakiLaki">Laki - Laki</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="jenisKelamin"
                        id="perempuan"
                        className="w-fit border p-3 rounded"
                      />
                      <label htmlFor="perempuan">Perempuan</label>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 flex flex-col ml-5">
                  <label htmlFor="kecamatan" className="w-fit mb-1">
                    Kecamatan<span className="text-red-600 font-bold">*</span>
                  </label>
                  <select
                    name="kecamatan"
                    id="kecamatan"
                    required
                    className="border p-3 rounded"
                  >
                    <option disabled selected hidden>
                      Pilih Salah Satu
                    </option>
                    <option value="01">DKI Jakarta</option>
                    <option value="28">Bandung</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-1/2 flex flex-col mr-5">
                  <label htmlFor="agama" className="w-fit mb-1">
                    Agama<span className="text-red-600 font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    name="agama"
                    id="agama"
                    placeholder="Agama"
                    required
                    className="border p-3 rounded"
                  />
                </div>
                <div className="w-1/2 flex flex-col ml-5">
                  <label htmlFor="kelurahan" className="w-fit mb-1">
                    Kelurahan / Desa
                    <span className="text-red-600 font-bold">*</span>
                  </label>
                  <select
                    name="kelurahan"
                    id="kelurahan"
                    required
                    className="border p-3 rounded"
                  >
                    <option disabled selected hidden>
                      Pilih Salah Satu
                    </option>
                    <option value="01">DKI Jakarta</option>
                    <option value="28">Bandung</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-1/2 flex flex-col mr-5">
                  <label htmlFor="noHp" className="w-fit mb-1">
                    Nomor HP/Kontak
                    <span className="text-red-600 font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    name="noHp"
                    id="noHp"
                    placeholder="Nomor HP/Kontak"
                    required
                    className="border p-3 rounded"
                  />
                </div>
                <div className="w-1/2 flex flex-col ml-5">
                  <label htmlFor="kodePos" className="w-fit mb-1">
                    Kode Pos<span className="text-red-600 font-bold">*</span>
                  </label>
                  <input
                    type="number"
                    name="kodePos"
                    id="kodePos"
                    placeholder="Kode Pos"
                    required
                    className="w-fit border p-3 rounded"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-1/2 flex flex-col mr-5">
                  <label htmlFor="noKontakDarurat" className="w-fit mb-1">
                    Nomor Kontak Darurat
                  </label>
                  <input
                    type="text"
                    name="noKontakDarurat"
                    id="noKontakDarurat"
                    placeholder="Nomor Kontak Darurat"
                    className="border p-3 rounded"
                  />
                </div>
                <div className="w-1/2 flex flex-col ml-5">
                  <label htmlFor="noKtp" className="w-fit mb-1">
                    Nomor KTP<span className="text-red-600 font-bold">*</span>
                  </label>
                  <input
                    type="number"
                    name="noKtp"
                    id="noKtp"
                    placeholder="Nomor KTP"
                    required
                    className="w-fit border p-3 rounded"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-1/2 flex flex-col mr-5">
                  <label htmlFor="pendidikan Terakhir" className="w-fit mb-1">
                    Pendidikan Terakhir
                    <span className="text-red-600 font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    name="pendidikan Terakhir"
                    id="pendidikan Terakhir"
                    placeholder="Pendidikan Terakhir"
                    required
                    className="border p-3 rounded"
                  />
                </div>
                <div className="w-1/2 flex flex-col ml-5">
                  <label htmlFor="uploadKtp" className="w-fit mb-1">
                    Upload KTP<span className="text-red-600 font-bold">*</span>
                  </label>
                  <input
                    type="file"
                    name="uploadKtp"
                    id="uploadKtp"
                    required
                    className="w-fit border p-3 rounded"
                  />
                </div>
              </div>
              <div className="w-[48%] flex flex-col mr-5">
                <label htmlFor="email" className="w-fit mb-1">
                  Alamat Email<span className="text-red-600 font-bold">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Alamat Email"
                  required
                  className="border p-3 rounded"
                />
              </div>
              <div className="w-[48%] flex flex-col mr-5">
                <label htmlFor="tglGabung" className="w-fit mb-1">
                  Tanggal bergabung dengan perusahaan
                  <span className="text-red-600 font-bold">*</span>
                </label>
                <input
                  type="date"
                  name="tglGabung"
                  id="tglGabung"
                  required
                  className="w-fit border p-3 rounded"
                />
              </div>
              <div className="w-[48%] flex flex-col mr-5">
                <label htmlFor="alamat" className="w-fit mb-1">
                  Alamat Tempat Tinggal Sesuai dengan KTP
                  <span className="text-red-600 font-bold">*</span>
                </label>
                <textarea
                  name="alamat"
                  id="alamat"
                  placeholder="Alamat Tempat Tinggal Sesuai dengan KTP"
                  cols="30"
                  rows="5"
                  required
                  className="border p-3 rounded"
                />
              </div>
            </div>
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
