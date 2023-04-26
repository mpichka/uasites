import { Category } from "../../components/category";
import { aggregators } from "../../resources/aggregators";

export function AggregatorsCategory() {
  return (
    <Category
      title="Агрегатори"
      icon="🔖"
      data={aggregators}
      titleBackgroundColor="#b30f00"
    />
  );
}
