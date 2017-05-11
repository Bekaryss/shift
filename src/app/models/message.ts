import { ApplicationUser } from "app/models/ApplicationUser";
import { ProjectChat } from "app/models/projectChat";

export class Message {
    Id: number;
    Text: string;
    MessageTime: Date;
    ProjectChatId: number;
    ProjectChat: ProjectChat;
    UserId: string;
    User: ApplicationUser;
}