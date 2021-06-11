import { Injectable } from '@angular/core';
import { SapphireDbService } from 'ng-sapphiredb';
import { ChatModel } from '../models/chat.model';
import { GroupModel } from '../models/group.model';
import { v4 as uuidv4 } from 'uuid';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class DBService {
  constructor(private db: SapphireDbService, private auth: AuthService) { }


  getGroupsSubs() {
    return this.db.collection<GroupModel>('groups').values();
  }

  addGroup(name: string) {
    if(this.verifyLoggued()) {
      this.db.collection<GroupModel>('groups').add({
        name: name
      })
    }
    
  }

  getMessagesSubs(id: string) {
    return this.db.collection<ChatModel>('messages').where(
      ['groupId', '==', parseInt(id, 10)]
    
     ).take(25).values();
  }

  addMessage(content: string, groupId: string, userId: string) {
    if(this.verifyLoggued()) {
      this.db.collection<ChatModel>('messages').add({
        content: content,
        date: new Date(),
        groupId: parseInt(groupId, 10),
        userID: userId
      })
    }
   
  }

  getUserID() {
    let userID = localStorage.getItem('userID');
    if (userID) {
      return userID
    } else {
      userID = uuidv4();
      localStorage.setItem('userID', userID)
      return userID;
    }
  }
  verifyLoggued() {
    if(this.auth.isLoggedIn) {
      return true;
    }
    this.auth.SignOut();
    return false;
  }
}