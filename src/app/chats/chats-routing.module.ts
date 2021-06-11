import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatPage } from './pages/chat/chat.page';
import { GroupsPage } from './pages/groups/groups.page';

const routes: Routes = [
  {

        path: 'groups',
        component: GroupsPage,
      },
      {
        path: 'chat/:id',
        component: ChatPage,
      },
      {
        path: '',
        redirectTo: '/tabs/chats/groups',
        pathMatch: 'full'
      }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatsPageRoutingModule {}
