import { Project } from "app/models/project";
import { Message } from "app/models/message";
import { ProjectTask } from "app/models/ProjectTask";

export class ApplicationUser {
    Projects: Project[];
    Messages: Message[];
    Tasks: ProjectTask[];
    Email: string;
    EmailConfirmed: boolean;
    PasswordHash: string;
    SecurityStamp: string;
    PhoneNumber: string;
    PhoneNumberConfirmed: boolean;
    TwoFactorEnabled: boolean;
    LockoutEndDateUtc: Date;
    LockoutEnabled: boolean;
    AccessFailedCount: number;
    Roles: any;
    Claims: any;
    Logins: any;
    Id: string;
    UserName: string;
}