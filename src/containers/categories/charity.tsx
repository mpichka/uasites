import { Category } from "../../components/category";
import { charity } from "../../resources/charity";

export function CharityCategory() {
  return (
    <Category
      title="Благодійність"
      icon="❤️"
      data={charity}
      titleBackgroundColor="#dbdbdb"
      titleColor="black"
    />
  );
}
