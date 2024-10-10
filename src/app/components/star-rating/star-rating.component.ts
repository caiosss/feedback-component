import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() rating: number = 0; 
  @Output() ratingChange = new EventEmitter<number>(); 

  stars: boolean[] = Array(5).fill(false); 

  setRating(rating: number) {
    this.rating = rating;
    this.ratingChange.emit(this.rating);
    this.updateStars();
  }

  updateStars() {
    this.stars = this.stars.map((_, index) => index < this.rating);
  }
  
}
