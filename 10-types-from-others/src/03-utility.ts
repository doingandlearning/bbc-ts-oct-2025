const promise = async () => 123;

const result = promise();

type ResolvedResult = Awaited<typeof result>;

interface Todo {
  title: string;
  description: string;
  id?: number;
  completed: boolean;
  dueDate?: Date;
}

type FetchedTodo = Required<Todo>;

const unfinishedTodo: Partial<Todo> = {};
unfinishedTodo.title = "Think about conditionals";
unfinishedTodo.description = "They are cool";
unfinishedTodo.completed = false;

type PartialTodo = Omit<Todo, "description"> &
  Partial<Pick<Todo, "description">>;
