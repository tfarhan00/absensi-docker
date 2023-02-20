import React from "react";
import { useQuery } from "@tanstack/react-query";
import * as COMPONENT from "@/components";
import * as MISC from "@/misc";
import { useEffect } from "react";

export default function TestPage() {
  const { isLoading, data } = useQuery({
    queryKey: ["jsonDummy"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      return data;
    },
  });

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  });

  if (isLoading) return <MISC.LoadingPage />;

  return (
    <div className="w-full min-h-[100vh] flex flex-col gap-3 items-center justify-center">
      Only a test page, you can build and test a component or anything here to
      make unbreaking changes.
      <COMPONENT.Table dataTable={data} />
    </div>
  );
}
