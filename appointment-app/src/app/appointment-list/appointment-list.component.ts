import { Component, OnInit } from '@angular/core';
import { Appointment } from '../model/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{
  appointment : Appointment[] = []
  appointmentListTitle : string =  "";
  appointmentListDate : Date = new Date();

  ngOnInit(): void {
      let savedAppointments = localStorage.getItem("appointments")
      this.appointment = savedAppointments ? JSON.parse(savedAppointments) : []
  }

  onAddAppointment(){
    if(this.appointmentListTitle.trim().length && this.appointmentListDate){
      let newAppointment : Appointment ={
        id : Date.now(),
        title : this.appointmentListTitle,
        date : this.appointmentListDate
      }

      this.appointment.push(newAppointment);

      // alert('appointment booked for date: ' + this.appointmentListDate);

      this.appointmentListTitle = '';
      this.appointmentListDate = new Date();

      localStorage.setItem("appointments" , JSON.stringify(this.appointment))
      
    }
  }

  onDeleteAppointment(index:number){
    this.appointment.splice(index,1);
    localStorage.setItem("appointments" , JSON.stringify(this.appointment))

  }

}
