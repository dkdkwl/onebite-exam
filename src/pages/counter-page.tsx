import Viewer from "@/components/ui/counter/Viewer";
import Controller from "@/components/ui/counter/Controller";

export default function CounterPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">counter-page</h1>
      <Viewer />
      <Controller></Controller>
    </div>
  );
}
