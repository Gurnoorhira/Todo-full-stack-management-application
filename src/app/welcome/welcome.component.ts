import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'some welcome message'
  welcomeMessageFromService : String
  name = ''

  constructor(
    private route:ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit() {
    //console.log(this.message)
    //console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }
  getWelcomeMessage(){
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(response => this.handleSuccessfulRespond(response)
    ,error => this.handleErrorResponse(error));
    //console.log('last line of getWelcomeMessage')
    //console.log("get welcome message")
  }

  getWelcomeMessageWithParameter(){
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
    response => this.handleSuccessfulRespond(response)
    ,error => this.handleErrorResponse(error));
    //console.log('last line of getWelcomeMessage')
    //console.log("get welcome message")
  }


  handleSuccessfulRespond(response){
    this.welcomeMessageFromService = response.message
    //console.log(response);
    //console.log(response.message);
  }

  handleErrorResponse(error){
    //console.log(error);
    //console.log(error.error);
    //console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }

}
