import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Product {
  price: number;
  // Add other product properties as needed
}

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  
  products = 
    {
      category: "Course",
      image: "assets/images/course-1.jpg",
      price: "$149.00",
      title: "Web Design & Development Course for Beginners",
      rating: 4.5,
      reviews: 123,
      instructor: "John Doe",
      duration: "1.49 Hrs",
      students: "30 Students",
    }
    content: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ultricies aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum. ";

    showMore: boolean = false;

    @Input() product: Product = { price: 0 };
    quantity: number = 1;
  
    get totalPrice(): number {
      return this.product?.price ? this.product.price * this.quantity : 0;
    }
  
    increaseQuantity(): void {
      this.quantity++;
    }
  
    decreaseQuantity(): void {
      if (this.quantity > 1) {
        this.quantity--;
      }
    }
    toggleReadMore() {
      this.showMore = !this.showMore;
    }

    getRatingStars(rating: number): number[] {
      return Array(Math.floor(rating)).fill(0);
    }

    hasHalfStar(rating: number): boolean {
      return rating % 1 !== 0;
    }
}
