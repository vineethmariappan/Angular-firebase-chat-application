import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { ChatGroupsComponent } from './chat-groups/chat-groups.component';
import { GroupComponent } from './chat-groups/group/group.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
const AppRoutes : Routes=[{path: 'signup',component: SignUpComponent},
                          {path: 'login',component: LogInComponent},
                          {path : 'chatgroups',component : ChatGroupsComponent},
                          {path : 'chatgroups/group',component : GroupComponent}
                        ];
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    ChatGroupsComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
