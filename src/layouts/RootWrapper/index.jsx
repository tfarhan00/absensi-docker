import * as COMPONENT from "@/components";
import * as LAYOUT from "@/layouts";
import { useMobileSize } from "@/utils/hooks";
import { NAV_ITEMS } from "@/lib/NavItems";
import { Outlet } from "react-router-dom";
import React from "react";

export default function Layout(props) {
  const isMobile = useMobileSize();

  return (
    <LAYOUT.DataProvider>
      <div className="w-full h-[100vh] overflow-hidden flex">
        {isMobile ? (
          <COMPONENT.SidebarMobile navItems={NAV_ITEMS} />
        ) : (
          <COMPONENT.Sidebar navItems={NAV_ITEMS} />
        )}
        <div
          id="main-viewport"
          className="flex-1 bg-indigo-50/50 flex flex-col overflow-hidden"
        >
          <div className=" p-5">
            <COMPONENT.Header />
          </div>
          <div
            id="inner-viewport"
            className="flex-1 overflow-y-auto overflow-x-auto"
          >
            <Outlet />
          </div>
        </div>
      </div>
    </LAYOUT.DataProvider>
  );
}
