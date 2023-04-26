import { Category } from "../../components/category";
import { forums } from "../../resources/forums";

export function ForumsCategory() {
  return (
    <Category
      title="Форуми"
      icon="🎤"
      data={forums}
      titleBackgroundColor="#5a0480"
    />
  );
}
