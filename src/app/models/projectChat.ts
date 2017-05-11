import { Project } from "app/models/project";
import { Message } from "app/models/message";

export class ProjectChat {
    Id: number;
    Project: Project;
    Messages: Message[];
}