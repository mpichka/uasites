import { Category } from "../../components/category";
import { cooking } from "../../resources/cooking";

export function CookingCategory() {
  return (
    <Category
      title="Кулінарія"
      icon="❤️"
      data={cooking}
      titleBackgroundColor="#04801a"
    />
  );
}
