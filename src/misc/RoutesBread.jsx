import { Link } from "react-router-dom";
import React from "react";

export default function RoutesBread(props) {
  const { routes } = props;
  return (
    <div id="route-status" className="text-slate-500 font-medium text-sm">
      <Link to="/" className="hover:underline underline-offset-4">
        Home
      </Link>
      {routes?.map((route, index) => (
        <span key={index}>
          {" / "}
          <Link to={route.path} className="hover:underline underline-offset-4">
            {route.name}
          </Link>
        </span>
      ))}
    </div>
  );
}
