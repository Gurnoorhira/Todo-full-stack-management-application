import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message:String){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
    //console.log("execute hello world bean service");
  }

  executeHelloWorldBeanServiceWithPathVariable(name){
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-path-variable/${name}`,
    //{headers}
    );
    //console.log("execute hello world bean service");
  }

  // createBasicAuthenticationHttpHeader(){
  //   let username = 'gurnoor'
  //   let password = 'hira'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
  //   return basicAuthHeaderString;
  // }
  //http://localhost:8080/hello-world-path-variable/gurnoorhira

}
