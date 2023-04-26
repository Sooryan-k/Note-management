import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyNote } from 'src/model/myNote';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})


export class AddNoteComponent implements OnInit {
  // noteId:any;
  allGroups:any[]=[];
  note:MyNote={}
  
  constructor(private api:ApiService,private route:Router){}
  ngOnInit():void{
    this.api.getAllGroups().subscribe((data:any)=>{
    console.log(data);
    this.allGroups=data
    })
  }
  //add new note
  addNote(){
    this.api.addNote(this.note).subscribe(
      (data:any)=>{
        this.route.navigateByUrl('')//render to admin page
      }
    )
  }
}
