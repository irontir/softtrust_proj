import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RecaptchaModule } from 'ng-recaptcha';
@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, RecaptchaModule.forRoot()],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }