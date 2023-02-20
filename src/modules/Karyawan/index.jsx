import React from "react";
import { NavLink } from "react-router-dom";
import { karyawan } from "@/mocks/fakeData";
import { useQuery } from "@tanstack/react-query";
import { BiRefresh, BiListPlus } from "react-icons/bi";
import * as COMPONENT from "@/components";
import * as QUERY from "@/API/Karyawan/Queries";
import * as MISC from "@/misc";

export default function Karyawan() {
  const { isLoading } = useQuery(QUERY.karyawanMainQuery());

  if (isLoading) return <MISC.LoadingPage />;

  return (
    <COMPONENT.PageContainer>
      <div className="w-full flex flex-col">
        <div className="py-6 flex flex-col justify-end">
          <h1 className="text-2xl font-bold text-slate-600">
            <span className="text-slate-400 font-normal">Dashboard / </span>
            Karyawan
          </h1>
        </div>
        <hr className="mt-3" />
        <div className="w-full flex flex-col bg-white px-5 mt-4 rounded-lg shadow-lg">
          <div
            id="table-data-handler"
            className="w-full flex justify-end items-center py-4 gap-2 border-b overflow-x-auto"
          >
            <NavLink
              to="/karyawan"
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
              to="/karyawan/create"
              className="py-2.5 px-8 text-sm flex items-center gap-3 bg-green-500 hover:bg-green-400 rounded-md text-white"
            >
              <div className="text-lg">
                <BiListPlus />
              </div>
              <div className="hidden md:flex">Tambah</div>
            </NavLink>
          </div>
          <COMPONENT.Table dataTable={karyawan} />
        </div>
      </div>
    </COMPONENT.PageContainer>
  );
}
