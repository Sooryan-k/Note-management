import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyNote } from 'src/model/myNote';
import { MyGroup } from 'src/model/myGroup';
import { ApiService } from '../services/api.service'; 

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})

export class UpdateNoteComponent implements OnInit{
  noteId: string='';
  note:MyNote={}
  groups:MyGroup[]=[]
  
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService, private route:Router ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data.Id);
      this.noteId=data.Id;
      //call a api for getting particular contact details
      this.api.viewNote(this.noteId).subscribe((data:any)=>{
        console.log(data);//particular contact details
        this.note=data
        //call a api for getting all group details
        this.api.getAllGroups().subscribe((data:any)=>{
          console.log(data);
          this.groups=data
          
        })
      })

    })
  }
  updateNote(){
    this.api.updateNote(this.noteId,this.note).subscribe((data:any)=>{
      console.log(data);
      this.route.navigateByUrl('')
      
    })
  }
}
