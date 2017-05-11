import { ApplicationUser } from "app/models/ApplicationUser";
import { ProjectTask } from "app/models/ProjectTask";
import { ProjectChat } from "app/models/projectChat";

export class Project {
    Id: number;
    Title: string;
    Description: string;   
    ManagerId: string;
    Manager: ApplicationUser;
    Tasks: ProjectTask[];
    ProjectChat: ProjectChat;
}