import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChatModel } from 'src/app/models/chat.model';
import { AuthService } from 'src/app/services/auth.service';
import { DBService } from 'src/app/services/db.service';

@Component({
    selector: 'app-page-chat',
    templateUrl: 'chat.page.html',
    styleUrls: ['chat.page.scss'],
    
})

export class ChatPage implements OnInit {
    @ViewChild("scrollElement") content: IonContent;

    dummy = [1,2,3,2,3,3,43,4,5,5,5,5,5,2]
    chats$: Observable<ChatModel[]>;
    mensaje: string = '';
    chatID: string;
    userID: string;
    inicial = true;
    constructor(private db: DBService, public alertController: AlertController, private activatedRoute: ActivatedRoute, private auth: AuthService) { }


    ngOnInit() {
        this.chatID = this.activatedRoute.snapshot.params.id;
        this.chats$ = this.db.getMessagesSubs(this.chatID).pipe(map(single => {
            if(this.inicial) {
                setTimeout(() => {
                    this.content.scrollToBottom(500);

                }, 1000);
            }
            return single;
        }));
        this.userID = this.auth.getUser().email;
    }

    crearMensaje() {
        this.db.addMessage(this.mensaje, this.chatID, this.userID);
        this.mensaje = '';
    }

}