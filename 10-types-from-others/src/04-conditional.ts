type IsString<T> = T extends String ? true : false;

type A = IsString<"abc">;
type B = IsString<123>;

interface Todo {
  title: string;
  description: string;
  id?: number;
  completed: boolean;
  dueDate?: Date;
}

type PartialWithRequired<
  TargetType,
  K extends keyof TargetType
> = Partial<TargetType> & Required<Pick<TargetType, K>>;

type TitleRequired = PartialWithRequired<Todo, "title" | "id">;
