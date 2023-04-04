import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandeCongeComponent } from './components/employe-components/demande-conge/demande-conge.component';
import { ListEmployesComponent } from './components/admin-components/list-employes/list-employes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileEmployeComponent } from './components/admin-components/profile-employe/profile-employe.component';
import { TimetrackingComponent } from './components/employe-components/timetracking/timetracking.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ListCongesComponent } from './components/admin-components/conges/list-conges/list-conges.component';
import { PresenceCalendarComponent } from './components/employe-components/presence-calendar/presence-calendar.component';
import { HolidayCalendarComponent } from './components/admin-components/holiday-calendar/holiday-calendar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { InfoEmployeComponent } from './components/employe-components/info-employe/info-employe.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { PresenceAdminComponent } from './components/admin-components/presence/presence-admin/presence-admin.component';
import { UpdateEmployeComponent } from './components/admin-components/update-employe/update-employe.component';
import { UpdateInfoEmployeComponent } from './components/employe-components/update-info-employe/update-info-employe.component';
import { CongeRequestComponent } from './components/admin-components/conges/conge-request/conge-request.component';
import { CongeEmployeComponent } from './components/employe-components/conge-employe/conge-employe.component';
import { UpdatePhotoComponent } from './components/admin-components/update-photo/update-photo.component';
import { BilanCongesComponent } from './components/admin-components/conges/bilan-conges/bilan-conges.component';
import { UpdateProfilComponent } from './components/update-profil/update-profil.component';
import { ArchivedEmployesComponent } from './components/admin-components/archived-employes/archived-employes.component';
import { FooterComponent } from './components/footer/footer.component';



const routes: Routes = [
  {
    path: '', component : PublicLayoutComponent, children: [
      
      {path: '',redirectTo: 'home', pathMatch: 'full'},
      { path: 'home',component: HomeComponent},
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },

    ]
  },
  

  { path: '', component: SidebarComponent,children:[

  {path:'', redirectTo:'dashboard' , pathMatch:'full'},
  {path:'dashboard', component: DashboardComponent},
  {path:'profil', component: UpdateProfilComponent},
  { path: 'demandeConge', component: DemandeCongeComponent }, 
  
  { path: 'listEmployes', component: ListEmployesComponent },
  { path: 'archivedEmployes', component: ArchivedEmployesComponent },
  { path: 'profilEmploye/:id', component: ProfileEmployeComponent },
  { path: 'updateEmploye', component: UpdateEmployeComponent },
  { path: 'updatePhoto', component: UpdatePhotoComponent },
  { path: 'updateInfoEmploye', component: UpdateInfoEmployeComponent },
  { path: 'congeRequest/:id', component: CongeRequestComponent },
  { path: 'info-employe/:id', component: InfoEmployeComponent },
  
  { path: 'bilan-conges', component: BilanCongesComponent },
  { path: 'conge-employe', component: CongeEmployeComponent },
  { path: 'timetracking', component: TimetrackingComponent },
  { path: 'list-conges', component: ListCongesComponent },
  { path: 'presence-calendar/:id', component: PresenceCalendarComponent },
  { path: 'presence', component: PresenceAdminComponent },
  { path: 'holiday-calendar', component: HolidayCalendarComponent }]},
  

 
  { path: 'footer', component: FooterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
