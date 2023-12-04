import { useEffect, useState } from "react";
import "./App.css";
import RemindersList from "./components/RemindersList";
import Reminders from "./models/reminders";
import reminderService from "./services/reminders";
import AddReminder from "./components/AddReminder";

function App() {
  const [reminders, setReminders] = useState<Reminders[]>([]);

  const loadReminders = async () => {
    const results = await reminderService.getReminders();
    setReminders(results);
  };

  useEffect(() => {
    loadReminders();
  }, []);

  const deleteReminder = async (id: number) => {
    //const result = await reminderService.removeReminder(id);
    setReminders(reminders.filter((item) => item.id !== id));
  };

  const addReminder = async (title: string) => {
    const newReminder = await reminderService.setReminders(title);
    setReminders([newReminder, ...reminders]);
  };

  return (
    <div className="App">
      <AddReminder addReminder={addReminder}></AddReminder>
      <RemindersList
        items={reminders}
        deleteReminder={deleteReminder}
      ></RemindersList>
    </div>
  );
}

export default App;
