import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmployeService } from './services/employe.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DemandeCongeComponent } from './components/employe-components/demande-conge/demande-conge.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { CommonModule } from '@angular/common';

import { FlatpickrModule } from 'angularx-flatpickr';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { ModalModule } from 'ngx-bootstrap/modal';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { NgxPaginationModule } from 'ngx-pagination';

import { ListEmployesComponent } from './components/admin-components/list-employes/list-employes.component';
import { MatDialogModule, } from '@angular/material/dialog';
import { ProfileEmployeComponent } from './components/admin-components/profile-employe/profile-employe.component';
import { UpdateEmployeComponent } from './components/admin-components/update-employe/update-employe.component';


import { MatIconModule, MatButtonModule, MatInputModule, MatExpansionModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatSnackBarModule } from '@angular/material';
import { TimetrackingComponent } from './components/employe-components/timetracking/timetracking.component';
import { AddPresenceComponent } from './components/employe-components/add-presence/add-presence.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { ListCongesComponent } from './components/admin-components/conges/list-conges/list-conges.component';
import { AcceptComponent } from './components/admin-components/dialogs/accept/accept.component';
import { PresenceCalendarComponent } from './components/employe-components/presence-calendar/presence-calendar.component';
import { HolidayCalendarComponent } from './components/admin-components/holiday-calendar/holiday-calendar.component';
import { HomeComponent } from './components/home/home.component';

import { FooterComponent } from './components/footer/footer.component';
import { InfoEmployeComponent } from './components/employe-components/info-employe/info-employe.component';
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';
import { ProfilComponent } from './profil/profil.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HighchartsChartModule } from 'highcharts-angular';

import { MatDividerModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { PieComponent } from './shared/widgets/pie/pie.component';
import { LineComponent } from './shared/widgets/line/line.component';
import { Pie2Component } from './shared/widgets/pie2/pie2.component';
import { PresenceAdminComponent } from './components/admin-components/presence/presence-admin/presence-admin.component';
import { UpdateInfoEmployeComponent } from './components/employe-components/update-info-employe/update-info-employe.component';
import { CongeRequestComponent } from './components/admin-components/conges/conge-request/conge-request.component';
import { CongeEmployeComponent } from './components/employe-components/conge-employe/conge-employe.component';
import { UpdatePhotoComponent } from './components/admin-components/update-photo/update-photo.component';
import { BilanCongesComponent } from './components/admin-components/conges/bilan-conges/bilan-conges.component';
import { UpdateProfilComponent } from './components/update-profil/update-profil.component';
import { ArchivedEmployesComponent } from './components/admin-components/archived-employes/archived-employes.component';
import { EditorModule } from '@tinymce/tinymce-angular';


import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { UserService } from './services/user.service';
import { CongeService } from './services/conge.service';
import { TranslateModule, TranslateLoader, TranslateService } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DemandeCongeComponent,
    ListEmployesComponent,
    ProfileEmployeComponent,
    UpdateEmployeComponent,
    TimetrackingComponent,
    AddPresenceComponent,
    LoginComponent,
    RegisterComponent,
    ListCongesComponent,
    AcceptComponent,
    PresenceCalendarComponent,
    HolidayCalendarComponent,
    HomeComponent,
    FooterComponent,
    InfoEmployeComponent,
    ProfilComponent,
    DashboardComponent,
    PublicLayoutComponent,
    PieComponent,
    LineComponent,
    Pie2Component,
    PresenceAdminComponent,
    UpdateInfoEmployeComponent,
    CongeRequestComponent,
    CongeEmployeComponent,
    UpdatePhotoComponent,
    BilanCongesComponent,
    UpdateProfilComponent,
    ArchivedEmployesComponent,
  ],
  imports: [
    MatDialogModule,
    ScheduleModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModalModule,
    CommonModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    ModalModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatInputModule,
    FullCalendarModule,
    AccumulationChartModule,
    HighchartsChartModule,
    MatCardModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    EditorModule,
    MatSnackBarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => { return new TranslateHttpLoader(http, './assets/i18n/', '.json'); },
        deps: [HttpClient]
      }
    })
  ],

  exports: [
    PieComponent
  ],
  providers: [EmployeService,UserService,CongeService,TranslateService, authInterceptorProviders, { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent, ListCongesComponent],
  entryComponents: [AcceptComponent,CongeRequestComponent,CongeEmployeComponent]
})
export class AppModule { }
