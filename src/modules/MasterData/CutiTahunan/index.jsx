import React from "react";
import { NavLink } from "react-router-dom";
import { hariLiburNasional } from "@/mocks/fakeData";
import * as COMPONENT from "@/components";
import { BiRefresh, BiListPlus } from "react-icons/bi";

export default function CutiTahunan() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col bg-white px-5 rounded-lg shadow-lg">
        <div className="w-full flex justify-end items-center py-4 gap-2 border-b overflow-x-auto">
          <NavLink
            to="/master-data/cuti-tahunan"
            className="py-2.5 px-6 text-sm flex items-center gap-3 bg-slate-600 hover:bg-slate-500 rounded-md text-white mr-auto whitespace-nowrap"
          >
            <div className="text-lg">
              <BiRefresh />
            </div>
            <div className="hidden md:flex">Muat Ulang</div>
          </NavLink>
          <form action="#" className="hidden md:flex">
            <input
              type="search"
              name="cariData"
              id="cariData"
              placeholder="Search"
              className="border py-2.5 px-4 rounded-lg"
            />
          </form>
          <NavLink
            to="/master-data/cuti-tahunan/create"
            className="py-2.5 px-8 text-sm flex items-center gap-3 bg-green-500 hover:bg-green-400 rounded-md text-white"
          >
            <div className="text-lg">
              <BiListPlus />
            </div>
            <div className="hidden md:flex">Tambah</div>
          </NavLink>
        </div>
        <COMPONENT.Table dataTable={hariLiburNasional} />
      </div>
    </div>
  );
}
