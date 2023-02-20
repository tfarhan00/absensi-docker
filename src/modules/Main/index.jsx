import React from "react";
import * as COMPONENT from "@/components";

export default function Page() {
  return (
    <COMPONENT.PageContainer>
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="col-span-2">
          <COMPONENT.Card>
            <div className="w-full h-full flex flex-col gap-4">
              <div className="text-xl font-medium text-indigo-600">
                Welcome Back John ! 🎉
              </div>
              <div className="text-slate-600 text-sm">
                You have done 72% more attendance today. Check your new badge in
                your profile.
              </div>
              <button className="w-36 text-sm text-indigo-600 px-3 py-2 flex items-center justify-center rounded-lg border border-indigo-600">
                View Badges
              </button>
            </div>
          </COMPONENT.Card>
        </div>
        <div className="col-span-1 ">
          <COMPONENT.Card>Hello, John</COMPONENT.Card>
        </div>
        <div className="col-span-1">
          <COMPONENT.Card>Hello, John</COMPONENT.Card>
        </div>
      </div>
    </COMPONENT.PageContainer>
  );
}
