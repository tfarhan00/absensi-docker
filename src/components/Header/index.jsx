import React from "react";
import { useSidebarStore } from "@/stores";
import {
  BiSearch,
  BiLogOutCircle,
  BiUserCircle,
  BiSlider,
} from "react-icons/bi";
import { useEffect, useState } from "react";
import { usePopper } from "react-popper";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useOutsideClick } from "@/utils/hooks";

export default function Component() {
  const [toggleSidebar] = useSidebarStore((state) => [state.toggleSidebar]);

  return (
    <div className="overflow-x-auto w-full rounded-lg bg-white py-3 px-6 flex items-center justify-between shadow-lg shadow-slate-200/40">
      <div id="search-and-menu" className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="w-5 gap-1 flex flex-col xl:hidden"
        >
          <span className="w-full h-[2px] rounded bg-slate-500"></span>
          <span className="w-full h-[2px] rounded bg-slate-500"></span>
          <span className="w-full h-[2px] rounded bg-slate-500"></span>
        </button>
        <div className="text-lg lg:text-xl">
          <BiSearch />
        </div>
        <div>
          <input type="text" placeholder="Search..." className="outline-none" />
        </div>
      </div>
      <div id="profile-section" className="flex items-center gap-4 shrink-0">
        <div>
          <PopProfileMenu />
        </div>
      </div>
    </div>
  );
}

function PopProfileMenu(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [outsideClickRef, isClickedOutside] = useOutsideClick();

  const { attributes, styles } = usePopper(referenceElement, popperElement, {
    placement: "bottom-end",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [25, 30],
        },
      },
    ],
    initiallyClosed: true,
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isClickedOutside) {
      setIsOpen(false);
    }
  }, [isClickedOutside]);

  return (
    <>
      <button
        ref={setReferenceElement}
        onClick={() => toggleMenu()}
        className="w-8 h-8 rounded-full bg-slate-400"
      ></button>
      {isOpen &&
        createPortal(
          <div ref={outsideClickRef}>
            <div
              ref={(el) => {
                setPopperElement(el);
              }}
              style={{ ...styles.popper }}
              {...attributes.popper}
              className="w-48 rounded-lg bg-white border z-[99] text-slate-500"
            >
              <div>
                <PersonProfileInfo />
              </div>
              <div className="w-full h-full flex flex-col">
                <div className="px-5 h-12 flex items-center gap-4 hover:bg-slate-100">
                  <BiUserCircle />
                  <div>Profile</div>
                </div>
                <div className="px-5 h-12 flex items-center gap-4 hover:bg-slate-100">
                  <BiSlider />
                  <div>Settings</div>
                </div>
                <div className="border-t px-5 py-3">
                  <Link to="/login">
                    <div className="flex items-center gap-4 text-red-500">
                      <BiLogOutCircle />
                      <div>Logout</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>,
          document.querySelector("body")
        )}
    </>
  );
}

const PersonProfileInfo = (props) => {
  return (
    <div className="flex p-5 items-center gap-4 border-b">
      <div className="w-10 h-10 rounded-full bg-slate-400"></div>
      <div className="flex flex-col">
        <div>John Run</div>
        <div className="text-sm">User</div>
      </div>
    </div>
  );
};
