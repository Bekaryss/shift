import { ProjectTask } from "app/models/ProjectTask";

export class TaskStatus {
    Id: number;
    StatusText: string;
    Tasks: ProjectTask[];
}