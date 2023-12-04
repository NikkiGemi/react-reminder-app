import Reminders from "../models/reminders";

interface ReminderListProps {
  items: Reminders[];
  deleteReminder: (id: number) => void;
}

const RemindersList = ({ items, deleteReminder }: ReminderListProps) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          className="list-group-item d-flex justify-content-between"
          key={item.id}
        >
          {item.title}
          <button
            className="btn btn-outline-danger rounded-pill "
            onClick={() => deleteReminder(item.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default RemindersList;
