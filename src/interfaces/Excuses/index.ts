export default interface IExcuses {
  id: number;
  excuse: string;
  category: "family" | "office" | "children" | "college" | "party";
}
