import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.css']
})

export class ViewNoteComponent implements OnInit {

  notetId:string=''
  note:any;
  noteId:any;
  noteName:any;
  groupId:any;
  groupName:any;
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService) {}

  ngOnInit():void{
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      this.noteId=data.noteId

      this.api.viewNote(this.noteId).subscribe((data:any)=>{
        console.log(data);//data of particular contact
        this.note=data
        this.groupId=data.groupId//2

        //view groupname
        this.api.getGroupName(this.groupId).subscribe((data:any)=>{
        this.groupName=data.name
        console.log(this.groupName);
        
        })
      })
    })
  }
}
