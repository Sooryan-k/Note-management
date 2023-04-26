import { Component, OnInit } from '@angular/core';
import { MyNote } from 'src/model/myNote';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-note-manager',
  templateUrl: './note-manager.component.html',
  styleUrls: ['./note-manager.component.css']
})
export class NoteManagerComponent implements OnInit {

  loginDate:any;
  note:any;

  searchKey:string='';

  allNote:MyNote[]=[]

  constructor(private api:ApiService){
    this.loginDate=new Date()
  }

  ngOnInit():void{
    this.getAllNote()
       }
       getAllNote(){
        this.api.getAllNote().subscribe((data:any)=>{
          console.log(data);
          this.allNote=data
       })
  }
  
  search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value
    console.log(this.searchKey);
    
  }
  deleteNote(noteId:any){
    this.api.deleteNote(noteId).subscribe((data:any)=>{
      alert("Note deleted")
      this.getAllNote()
    })
  }
}

