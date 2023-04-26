import { Category } from "../../components/category";
import { tech } from "../../resources/tech";

export function TechCategory() {
  return (
    <Category
      title="Техно"
      icon="📻"
      data={tech}
      titleBackgroundColor="#545454"
    />
  );
}
