import axios from "axios";
import Reminders from "../models/reminders";

class ReminderService {
  http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
  });

  async getReminders() {
    const response = await this.http.get<Reminders[]>("/todos");
    return response.data;
  }

  async setReminders(title: string) {
    const response = await this.http.post<Reminders>("/todos", { title });
    return response.data;
  }

  async removeReminder(id: number) {
    const response = await this.http.delete("/todos" + id);
    return response.data;
  }
}

export default new ReminderService();
