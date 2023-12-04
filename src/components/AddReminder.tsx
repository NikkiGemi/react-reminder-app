import { useState } from "react";
import { JsxElement } from "typescript";
import reminderService from "../services/reminders";

interface NewReminderProps {
  addReminder: (title: string) => void;
}

const AddReminder = ({ addReminder }: NewReminderProps): JSX.Element => {
  const [title, setTitle] = useState("");
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    addReminder(title);
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="newReminder" className="form-label"></label>
        <input
          value={title}
          type="text"
          id="newReminder"
          className="form-control"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="btn btn-primary rounded-pill my-2">
          Add Reminder
        </button>
      </form>
    </div>
  );
};

export default AddReminder;
