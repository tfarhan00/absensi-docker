import * as COMPONENT from "@/components";

export default function LoadingPage(props) {
  const { message } = props;
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-center gap-2">
      <COMPONENT.Spinner />
      <div>{message ?? null}</div>
    </div>
  );
}
