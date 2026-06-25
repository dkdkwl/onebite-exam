import "./App.css";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Popover, PopoverContent, PopoverTrigger } from "./components/ui/popover";
function App() {
  const isActive = true;
  return (
    <>
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>This is the popover content</PopoverContent>
    </Popover>
      <div className="p-4">This is the popover content</div>
      <Button>Click me</Button>
      <div className={cn(isActive ? "text-muted" : "text-red-500")}>
        This is muted text
      </div>
      <div className="text-primary">This is primary text</div>
      <div className="text-destructive">This is destructive text</div>
      <Carousel className="mx-10">
        <CarouselContent>
          <CarouselItem className="basis-1/3">1</CarouselItem>
          <CarouselItem className="basis-1/3">2</CarouselItem>
          <CarouselItem className="basis-1/3">3</CarouselItem>
          <CarouselItem className="basis-1/3">4</CarouselItem>
          <CarouselItem className="basis-1/3">5</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

export default App;
