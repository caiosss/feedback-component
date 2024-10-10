import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

export interface Feedback {
  id?: number
  respostas: any[]
  avaliacao: number
  comentario: string
}

@Injectable({
  providedIn: 'root'
})

export class FeedbackService {
  
  private urlAPI = 'http://localhost:8080/feedback'


  constructor(private http: HttpClient) { }

  enviarFeedback(feedback: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(`${this.urlAPI}/novo`, feedback)
  }

  buscarFeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.urlAPI}/todos`)
  }

}
