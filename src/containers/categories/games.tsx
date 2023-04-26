import { Category } from "../../components/category";
import { games } from "../../resources/games";

export function GamesCategory() {
  return (
    <Category
      title="Ігри"
      icon="🕹️"
      data={games}
      titleBackgroundColor="#0023bd"
    />
  );
}
