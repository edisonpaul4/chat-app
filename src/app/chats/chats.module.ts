import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChatsPageRoutingModule } from './chats-routing.module';
import { GroupsPage } from './pages/groups/groups.page';
import { ChatPage } from './pages/chat/chat.page';
import { SapphireDbModule, SAPPHIRE_DB_OPTIONS } from 'ng-sapphiredb';
import { SapphireDbOptions } from 'sapphiredb';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    IonicModule,
    SapphireDbModule,
    CommonModule,
    FormsModule,
    ChatsPageRoutingModule,
    
  ],
  declarations: [GroupsPage, ChatPage],
  providers: [
    {
      provide: SAPPHIRE_DB_OPTIONS,
      useValue: {
        serverBaseUrl: environment.serverBaseUrl,
        connectionType: 'websocket'
      } as SapphireDbOptions
    }
  ]
})
export class ChatsPageModule {}
