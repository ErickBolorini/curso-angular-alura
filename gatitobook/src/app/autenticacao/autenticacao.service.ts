import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private hhtpClient: HttpClient) { }

  autenticar(usuario:string, senha:string): Observable<any>
}
