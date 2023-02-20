import React from "react";
import * as COMPONENT from "@/components";
import { Outlet } from "react-router-dom";
import { useCurrentRoutes } from "@/utils/hooks";
import { NavLink } from "react-router-dom";
import { ROUTE } from "@/lib/Routes";
import { BiCalendarEvent, BiTimer, BiTime, BiCalendar } from "react-icons/bi";

import clsx from "clsx";

export default function MasterDataLayout() {
  const masterDataItems = [
    {
      name: "Hari Libur Nasional",
      path: ROUTE.MASTER_DATA.HARI_LIBUR_NASIONAL,
      icon: <BiCalendarEvent />,
    },
    {
      name: "Cuti Tahunan",
      path: ROUTE.MASTER_DATA.CUTI_TAHUNAN,
      icon: <BiCalendar />,
    },
    {
      name: "Toleransi Keterlambatan",
      path: ROUTE.MASTER_DATA.TOLERANSI_KETERLAMBATAN,
      icon: <BiTimer />,
    },
    {
      name: "Jam Kerja",
      path: ROUTE.MASTER_DATA.JAM_KERJA,
      icon: <BiTime />,
    },
  ];

  const linkActiveClass =
    "rounded-md text-white bg-indigo-500 shadow-indigo-300 shadow-md";
  const linkInactiveClass = "rounded-md text-slate-500";

  const routes = useCurrentRoutes();

  return (
    <COMPONENT.PageContainer>
      <div className="w-full h-auto flex flex-col">
        <div
          id="layout-head"
          className="min-h-[8rem] flex flex-col justify-end gap-8 pt-4"
        >
          <h1 className="text-2xl font-bold text-slate-600">
            <span className="text-slate-400 font-normal">
              {routes[0].name} /{" "}
            </span>
            {routes[1].name} {routes[2] && `/ ${routes[2].name}`}
          </h1>
          <div className="w-full flex items-center gap-4 overflow-x-auto flex-nowrap py-4">
            {masterDataItems.map((item) => (
              <NavLink key={item.name} to={item.path}>
                {({ isActive }) => (
                  <div
                    className={clsx(
                      "text-sm font-medium px-5 py-2.5 whitespace-nowrap flex items-center gap-3",
                      isActive ? linkActiveClass : linkInactiveClass
                    )}
                  >
                    <div className="text-normal">{item.icon}</div>
                    <div>{item.name}</div>
                  </div>
                )}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="py-4">
          <Outlet />
        </div>
      </div>
    </COMPONENT.PageContainer>
  );
}
