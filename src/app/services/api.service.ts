import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyNote} from 'src/model/myNote';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http:HttpClient) { }
  baseUrl:string='http://localhost:3000/note'
  //function - get all notes 
  getAllNote():Observable<MyNote>{
    return this.http.get(this.baseUrl)
  }
  //api call for fetch particular note
  viewNote(noteId:any){
    // http://localhost:3000/note
    return this.http.get(`${this.baseUrl}/${noteId}`)
  }
  //api call for fetch groupname
  getGroupName(groupId:any){
    return this.http.get('http://localhost:3000/group/'+groupId)
  }
  //function for fetch all groups from http://localhost:3000/group
  getAllGroups(){
    return this.http.get('http://localhost:3000/group')
  }
  //function for adding new contact to server
  addNote(noteBody:any){
    return this.http.post(this.baseUrl,noteBody)
  }
  //function for delete a contact from server
  deleteNote(noteId:any){
    return this.http.delete(`${this.baseUrl}/${noteId}`)
  }
  //function fr updating an existing contact
  updateNote(noteId:any,noteBody:any){
    return this.http.put(`${this.baseUrl}/${noteId}`,noteBody)
  }
}
  


