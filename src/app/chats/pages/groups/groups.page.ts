import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs/internal/Observable';
import { SapphireDb } from 'sapphiredb';
import { GroupModel } from 'src/app/models/group.model';
import { DBService } from 'src/app/services/db.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-page-groups',
    templateUrl: 'groups.page.html',
    styleUrls: ['groups.page.scss']
})

export class GroupsPage implements OnInit {
    dummy = [1, 2, 3, 2, 3, 3, 43, 4, 5, 5, 5, 5, 5, 2]
    groups$: Observable<GroupModel[]>;
    constructor(private db: DBService, public alertController: AlertController) { }


    ngOnInit() {
        this.groups$ = this.db.getGroupsSubs().pipe(map(single => {
            return single;
        }));
    }

    async addGroup() {
        const alert = await this.alertController.create({
            header: 'Nuevo Grupo!',
            inputs: [
              {
                name: 'name',
                type: 'text',
                placeholder: ''
              }
            ],
            buttons: [
              {
                text: 'Cancelar',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                  console.log('Confirm Cancel');
                }
              }, {
                text: 'Ok',
                handler: (data) => {
                  this.db.addGroup(data.name)
                }
              }
            ]
          });
      
          await alert.present();
    }
}