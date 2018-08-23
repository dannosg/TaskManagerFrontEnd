import { LocalTaskService } from './services/local-task.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CommonModule } from '@angular/common';
import { IsDonePipe } from './pipes/is-done-pipe';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatDatepickerModule,
  MatDialogModule, MatFormFieldModule,
  MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule, MatProgressSpinnerModule,
  MatRadioModule, MatSelectModule, MatSlideToggleModule,
  MatSnackBarModule, MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TestRestComponent } from './test-rest/test-rest.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'new-task', component: NewTaskComponent },
  { path: 'edit-task/:id', component: EditTaskComponent },
  { path: 'test-rest', component: TestRestComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewTaskComponent,
    EditTaskComponent,
    TestRestComponent,
    IsDonePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatListModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule
  ],
  exports: [
    RouterModule,
    MatButtonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatListModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule
  ],
  providers: [LocalTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
