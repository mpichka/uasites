import { Category } from "../../components/category";
import { news } from "../../resources/news";

export function NewsCategory() {
  return (
    <Category
      title="Новини"
      icon="📰"
      data={news}
      titleBackgroundColor="#0080F6"
    />
  );
}
