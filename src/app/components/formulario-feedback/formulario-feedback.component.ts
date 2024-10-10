import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Feedback, FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-formulario-feedback',
  templateUrl: './formulario-feedback.component.html',
  styleUrls: ['./formulario-feedback.component.css']
})

export class FormularioFeedbackComponent {
  questions = [
    { question: "Como foi a experiência de assinatura?", isYesNo: false, resposta: ''},
    { question: "Você se sentiu seguro durante o processo?", isYesNo: true, resposta: ''},
    { question: "O produto atendeu às suas expectativas?", isYesNo: true, resposta: ''},
    { question: "Você recomendaria nosso produto?", isYesNo: true, resposta: ''},
    { question: "Como você avaliaria nosso produto?", isYesNo: false, rating: 0},
  ]

  enableComments: boolean = false
  exibirMensagem: boolean = false

  feedback: Feedback = {
    respostas: [],
    avaliacao: 0,
    comentario: ''
  }

  toggleShow() {
    this.enableComments = !this.enableComments
  }

  valor(question: any, event: any) {
    if (question && event && event.target && event.target.value !== null) {
      question.resposta = event.target.value

      console.log(question.resposta)

      const existingIndex = this.feedback.respostas.findIndex(r => r.pergunta === question.question)
      
      if (existingIndex !== -1) {
        this.feedback.respostas[existingIndex].resposta = question.resposta
      } else {
        this.feedback.respostas.push(question.resposta)
      }
  } else {
    console.log('Erro: question ou event está nulo.')
  }
}

  setRating(question: any, rating: number) {
    question.rating = rating
    this.feedback.avaliacao = question.rating
    
    console.log("Avaliação para a questão:", question.question, "é", question.rating)
  }



  constructor(private feedbackService: FeedbackService) { }

  onSubmit(): void {
    console.log('Respostas enviadas:', this.feedback.respostas)
    console.log('Respostas enviadas:', this.feedback)
    
    this.feedbackService.enviarFeedback(this.feedback).subscribe(
      response => {
        console.log("Feedback enviado ", response)
        this.exibirMensagem = true
      },
      error => {
        console.error("Erro ao enviar o feedback ", error)
      }
    )
  }
}
