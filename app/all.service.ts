import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable()

export class AllService {

  url: any;

  constructor(private _http: Http) { }
  
  register(data){
    console.log(data);
    return this._http.post('http://localhost/phpdata/register.php',data)
    .pipe(map((res: Response)=>{ return res.json()}));
  }

  getUsers(){
    return this._http.get("http://localhost/phpdata/getUsers.php",null).
    pipe(map((phpresponse: Response)=>{ return phpresponse.json() }))
  }

  getUserById(data){
    return this._http.get("http://localhost/phpdata/getUserById.php?id="+data,null).
    pipe(map((phpresponse: Response)=>{ return phpresponse.json() }))
  }

  delete(data){
    return this._http.get("http://localhost/phpdata/delete.php?id="+data,null)
    .pipe(map((res: Response)=>{ return res.json() }));
  }

  update(data){
    console.log(data);
    return this._http.post("http://localhost/phpdata/update.php",data)
    .pipe(map((res: Response)=>{ return res.json() }));
  }

  setUrl(TempUrl: string) {
    //console.log("In Servec",TempUrl);
    this.url= TempUrl;
  }
  getUrl() {
    return this.url;
  }
  login(data){
    return this._http.post("http://localhost/phpdata/login.php",data).pipe(
      map((res: Response)=>{return res.json()})
    );
  }
  checkLife(session){
    console.log(session);
    return this._http.post("http://localhost/phpdata/checkLife.php",session).pipe(
      map((res: Response)=>{return res.json()})
    );
  }

  addEvent(data){
    return this._http.post("http://localhost/college_website/logic/eventupload.php",data).pipe(map((res)=>{
      return res.json();
    }));
  }
}

