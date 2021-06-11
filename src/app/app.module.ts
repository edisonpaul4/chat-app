import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SapphireDbModule, SAPPHIRE_DB_OPTIONS } from 'ng-sapphiredb';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SapphireDbOptions } from 'sapphiredb';
import { DBService } from 'src/app/services/db.service';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LoginPage } from './login/login.page';
@NgModule({
  declarations: [AppComponent, LoginPage,],
  entryComponents: [],
  imports: [BrowserModule,AngularFireModule.initializeApp(environment.firebase), SapphireDbModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, 
    AngularFireAuthModule,
    AngularFirestoreModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, {
    provide: SAPPHIRE_DB_OPTIONS,
    useValue: {
      serverBaseUrl: environment.serverBaseUrl,
      connectionType: 'websocket',
      // useSsl: true
    } as SapphireDbOptions
  }, DBService],
  bootstrap: [AppComponent],
})
export class AppModule { }
