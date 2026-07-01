import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TodoEditor() {
  return (
    <div className="flex gap-2">
      <Input placeholder="새로 할 일을 입력하세요..."></Input>
      <Button>추가</Button>
    </div>
  );
}
