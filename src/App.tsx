import "./App.css";
import { Button } from "@/components/ui/button";
import { ChefHat } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function App() {
  const isActive = true;
  return (
    <>
      <ChefHat className="text-primary" />
      <AlertDialog>
        <AlertDialogTrigger render={<Button variant="outline" />}>
          Show Dialog
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </DialogContent>
      </Dialog>
      <Popover>
        <PopoverTrigger asChild>
          <Button>open</Button>
        </PopoverTrigger>
        <PopoverContent>This is the popover content</PopoverContent>
      </Popover>
      <div className="p-4">This is the popover content</div>

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
