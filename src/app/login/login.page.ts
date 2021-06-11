import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss']
})

export class LoginPage implements OnInit {
    user: string = '';
    pass: string = '';
    constructor(
        public authService: AuthService
    ) { }

    ngOnInit() { }

    async iniciar() {
        await this.authService.SignIn(this.user, this.pass).catch(async e => {
            await this.authService.SignUp(this.user, this.pass)
        });
    }

}