import {Component, OnInit} from '@angular/core';
@Component({
    selector:"app-services",
    templateUrl:'./services.component.html',
    styleUrls:['./services.component.css']
})
export class servicesComponent implements OnInit{
    allowNewServer= false;
    serverCreationStatus="No Server is created!";
    serverName='Test Server';
    serverCreated=false;
    servers=['server','server2']
    constructor(){
        setTimeout(() => {
            this.allowNewServer=true;
        }, 2000);
    }
    ngOnInit(){

    }
    onCreateServer(){
        
        this.serverCreated=true; 
        this.servers.push(this.serverName);
        this.serverCreationStatus="New Server is Created and name is "+ this.serverName;
    }
    onUpdateServerName(event: any){
        console.log(event);
        this.serverName=event.target.value;
    }
}