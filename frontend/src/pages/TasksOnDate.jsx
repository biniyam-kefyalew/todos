import { useSearchParams } from "react-router-dom";
import ListOfTasks from "../components/ListOfTasks";

function TasksOnDate() {
  const [searchParams] = useSearchParams();
  const selectedDate = searchParams.get("date");

  return <ListOfTasks selectedDate={selectedDate} />;
}

export default TasksOnDate;
