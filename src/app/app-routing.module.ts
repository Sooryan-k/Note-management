import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteManagerComponent } from './note-manager/note-manager.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateNoteComponent } from './update-note/update-note.component';
import { ViewNoteComponent } from './view-note/view-note.component';

const routes: Routes = [
  {
    //path:'' means localhost://4200
    path:'',redirectTo:'note/admin',pathMatch:'full'
  },
  {
    //localhost://4200/note/admin
    path:'note/admin',component:NoteManagerComponent
  },
  {
    //localhost://4200/note/add
    path:'note/add',component:AddNoteComponent
  },
  {
    //localhost://4200/note/update
    path:'note/update/:Id',component:UpdateNoteComponent
  },
  {
    //localhost://4200/note/view
    path:'note/view/:noteId',component:ViewNoteComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
