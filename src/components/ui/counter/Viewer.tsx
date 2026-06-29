import { useCount } from "@/store/counte";

export default function Viewer() {
  const count = useCount();
  return <div>{count}</div>;
}
