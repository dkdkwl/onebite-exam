import { useCountStore } from "@/store/counte";

export default function CounterPage() {
  const { counter, increase, decrease } = useCountStore();
  return (
    <div>
      <h1 className="text-2xl font-bold">counter-page</h1>
      <div>{count}</div>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}
