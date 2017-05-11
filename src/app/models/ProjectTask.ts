import { ApplicationUser } from "app/models/ApplicationUser";
import { Project } from "app/models/project";
import { TaskStatus } from "app/models/taskStatus";

export class ProjectTask {
    Id: number;
    Title: string;
    Description: string;
    StartDate: string;
    EndDate: string;
    ClosedByUserId: string;
    ClosedByUser: ApplicationUser; 
    ProjectId: number;
    Project: Project;
    TaskStatusId: number;
    TaskStatus: TaskStatus;
}