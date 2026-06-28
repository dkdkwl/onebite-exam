import { create } from "zustand";

type Store = {
  counter:number;
  increase : ()=> void;
  decrease : ()=> void;
}

export default function Counter() {

  const store<Store> = create((set,get)=>(
    {
      counter: 0,
      increase:() => set((store)=> ({counter : store.counter + 1})),
      decrease:()=> set((store)=>({counter:store.counter -1}))
    }
  ));
  return (
    <div>
      
    </div>
  )
}
