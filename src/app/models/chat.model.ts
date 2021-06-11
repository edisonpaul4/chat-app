import { GroupModel } from "./group.model";

export interface ChatModel {
    group?: GroupModel;
    messageId?: number;
    content: string;
    date: Date;
    userID: string;
    groupId: number;
}