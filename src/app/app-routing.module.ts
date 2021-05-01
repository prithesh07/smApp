import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { AuthGuard } from './authentication/auth.guard';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'profile',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'myProfile',component:ProfileComponent},
  {path:'addPic',component:AddPhotoComponent},
  {path:'editProfile',component:EditProfileComponent},
  {path:'',component:LoginComponent},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
