import React from "react";
import { useSidebarStore } from "@/stores";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { useChildRoutesActive, useDropdownStillOpen } from "@/utils/hooks";
import LOGO from "@/assets/approve.png";
import clsx from "clsx";

export default function SidebarMobile(props) {
  const { navItems } = props;
  const [isShow, setFalse] = useSidebarStore((state) => [
    state.isShow,
    state.setFalse,
  ]);

  const sidebarAnimProps = {
    initial: { x: "-100%" },
    animate: { x: "0" },
    exit: { x: "-100%" },
    transition: { duration: 0.4, ease: "easeInOut" },
  };

  const activeNavClass =
    "w-full h-11 flex items-center justify-start rounded-lg cursor-pointer bg-slate-200 p-4 text-indigo-600";
  const inactiveNavClass =
    "w-full h-11 flex items-center justify-start rounded-lg cursor-pointer hover:bg-slate-50 p-4 text-slate-500";

  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="xl:hidden fixed top-0 left-0 z-[98] w-full h-full bg-black bg-opacity-20"
        >
          <motion.div
            {...sidebarAnimProps}
            className="top-0 left-0 w-[16.5rem] h-[100vh] border-r bg-white"
          >
            {/* WRITE ANYTHING DOWN INSIDE THIS CONTAINER */}
            <div id="container" className="w-full h-full flex flex-col">
              <div
                id="title-container"
                className="relative w-full flex items-center gap-4 p-6"
              >
                <div id="title-logo">
                  <img src={LOGO} alt="icon" className="w-11 h-11" />
                </div>
                <div
                  id="title-text"
                  className="font-[700] text-2xl text-slate-600"
                >
                  Absensi
                </div>
                <button
                  id="mobile-close-button"
                  onClick={setFalse}
                  className="xl:hidden absolute top-[50%] -translate-y-[50%] -right-5 w-10 h-10 rounded-full flex items-center justify-center p-2 bg-slate-100"
                >
                  <div
                    id="mobile-close-button"
                    className="w-full h-full rounded-full flex items-center justify-center text-white bg-indigo-600"
                  >
                    <BiChevronLeft />
                  </div>
                </button>
              </div>
              <div
                id="inner-container"
                className="overflow-hidden flex flex-col gap-2"
              >
                {Array.isArray(navItems) &&
                  navItems.map((item) => (
                    <div key={item.name}>
                      {!item.isParent ? (
                        <NavLink to={item.path}>
                          {({ isActive }) => (
                            <div
                              className={clsx(
                                "py-1 px-5",
                                isActive ? "w-full selectedMark" : "w-full"
                              )}
                            >
                              <div
                                className={
                                  isActive ? activeNavClass : inactiveNavClass
                                }
                              >
                                <div className="w-full h-full flex items-center justify-start gap-4 text-sm font-[600]">
                                  <div className="text-xl">{item.icon}</div>
                                  <div>{item.name}</div>
                                </div>
                              </div>
                            </div>
                          )}
                        </NavLink>
                      ) : (
                        <SidebarItemDropdown item={item} />
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const SidebarItemDropdown = (props) => {
  const { item } = props;

  const { isChildActive } = useChildRoutesActive(item.name);
  const { isDropdownOpen, setIsDropdownOpen } = useDropdownStillOpen(
    item.children
  );
  const [isAnimating, setIsAnimating] = useState(false);

  function toggleAnimateState() {
    setIsAnimating(true);
  }

  const activeChildNavClass =
    "w-full h-11 flex items-center justify-start rounded-lg cursor-pointer px-6 text-indigo-600";
  const inactiveChildNavClass =
    "w-full h-11 flex items-center justify-start rounded-lg cursor-pointer hover:bg-slate-100 px-6 text-slate-500";

  return (
    <motion.div
      id="dropdown-item-container"
      className="flex flex-col overflow-hidden"
    >
      <div
        id="parent-item"
        className={clsx(
          "px-5 py-1",
          isChildActive ? "w-full selectedMark" : "w-full"
        )}
      >
        <button
          onClick={() => {
            setIsDropdownOpen((prev) => !prev);
            toggleAnimateState();
          }}
          className={clsx(
            "w-full h-11 flex items-center justify-start rounded-lg cursor-pointer px-4",
            isChildActive
              ? "bg-slate-200 text-indigo-600"
              : " hover:bg-slate-50 px-4 text-slate-500"
          )}
        >
          <div className="w-full h-full flex items-center justify-between text-sm font-[600]">
            <div className="flex items-center gap-4">
              <div className="text-xl">{item.icon}</div>
              <div>{item.name}</div>
            </div>
            <div
              className={
                isDropdownOpen
                  ? "rotate-90 transition-transform duration-300"
                  : "transition-transform duration-300"
              }
            >
              <BiChevronRight className="text-lg" />
            </div>
          </div>
        </button>
      </div>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            id="children-item"
            initial={{ height: isAnimating ? 0 : "auto" }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-1 px-6"
          >
            {item.children?.map((child) => (
              <NavLink key={child.name} to={child.path}>
                {({ isActive }) => (
                  <div
                    className={
                      isActive ? activeChildNavClass : inactiveChildNavClass
                    }
                  >
                    <div className="w-full h-full flex items-center justify-start gap-4 text-sm font-[500]">
                      <div
                        id="circle-icon"
                        className="w-4 h-4 flex items-center justify-center"
                      >
                        {isActive ? (
                          <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center p-1 bg-slate-200">
                            <div className="w-full h-full bg-indigo-600 rounded-full"></div>
                          </div>
                        ) : (
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                        )}
                      </div>
                      <div>{child.name}</div>
                    </div>
                  </div>
                )}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
