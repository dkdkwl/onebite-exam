import TodoEditor from "@/components/ui/todo-list/todo-editor";
import TodoItem from "@/components/ui/todo-list/todo-item";
import { useTodosData } from "@/store/todos";

export default function TodoListPage() {
  const { data: todos, isLoading, error } = useTodosData();

  if (error) return <div>에러가 발생했습니다.</div>;
  if (isLoading) return <div>로딩중입니다.</div>;

  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">TodoListPage</h1>
      <TodoEditor></TodoEditor>
      {todos?.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}
