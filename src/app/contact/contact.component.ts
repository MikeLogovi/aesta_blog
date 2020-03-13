import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { NotifierService } from "angular-notifier";
import { NotificationsService } from 'angular2-notifications';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contact="Contact"
  public breadcrumb="Contact us"
  public name="";
  public email="";
  public message="";
  constructor(private messageService:MessageService,private notifier: NotificationsService) { }

  ngOnInit() {
  }
  sendMessage(){
      let Message={
        name:this.name,
        email:this.email,
        message:this.message
      }
      this.messageService.sendMessage(Message).then(data=>{
        const toast = this.notifier.success('Message envoyé!', 'Nous  vous répondrons bientot', {
          timeOut: 3000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true
        });
      }).catch(error=>{
        this.notifier.error('Message non envoyé!', 'Désolé des erreurs sont survenus lors de l envoi du message.Veuillez verifier si vous avez rempli tous les champs', {
          timeOut: 3000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true
        });
      })
  }

}
