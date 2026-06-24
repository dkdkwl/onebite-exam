import "./App.css";
import { Button } from "@/components/ui/Button";

function App() {
  const isActive = true;
  return (
    <>
      <Button>Click me</Button>
      <div className={cn(isActive ? "text-muted" : "text-red-500")}>
        This is muted text
      </div>
      <div className="text-primary">This is primary text</div>
      <div className="text-destructive">This is destructive text</div>
    </>
  );
}

export default App;
