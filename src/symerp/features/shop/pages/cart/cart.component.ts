import { Component, Input } from '@angular/core';


interface Product {
  price: number;
  // Add other product properties as needed
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  standalone: true,
})
export class CartComponent {
  products = [
    {
      image: "assets/images/course-1.jpg",
      price: "$149.00",
      title: "Web Design & Development Course for Beginners",
      rating: 5,
      reviews: 123,
      instructor: "John Doe",
      duration: "1.49 Hrs",
      students: "30 Students"
    },
    {
      image: "assets/images/course-2.jpg",
      price: "$199.00",
      title: "Advanced UI/UX Design Principles",
      rating: 4.5,
      reviews: 98,
      instructor: "Jane Smith",
      duration: "2.30 Hrs",
      students: "45 Students"
    },
    {
      image: "assets/images/course-3.jpg",
      price: "$99.00",
      title: "Introduction to JavaScript Programming",
      rating: 4.8,
      reviews: 150,
      instructor: "David Brown",
      duration: "3.00 Hrs",
      students: "60 Students"
    },
    {
      image: "assets/images/course-3.jpg",
      price: "$99.00",
      title: "Introduction to JavaScript Programming",
      rating: 4.8,
      reviews: 150,
      instructor: "David Brown",
      duration: "3.00 Hrs",
      students: "60 Students"
    },
    {
      image: "assets/images/course-3.jpg",
      price: "$99.00",
      title: "Introduction to JavaScript Programming",
      rating: 4.8,
      reviews: 150,
      instructor: "David Brown",
      duration: "3.00 Hrs",
      students: "60 Students"
    },
    {
      image: "assets/images/course-3.jpg",
      price: "$99.00",
      title: "Introduction to JavaScript Programming",
      rating: 4.8,
      reviews: 150,
      instructor: "David Brown",
      duration: "3.00 Hrs",
      students: "60 Students"
    },
    {
      image: "assets/images/course-3.jpg",
      price: "$99.00",
      title: "Introduction to JavaScript Programming",
      rating: 4.8,
      reviews: 150,
      instructor: "David Brown",
      duration: "3.00 Hrs",
      students: "60 Students"
    },
    {
      image: "assets/images/course-3.jpg",
      price: "$99.00",
      title: "Introduction to JavaScript Programming",
      rating: 4.8,
      reviews: 150,
      instructor: "David Brown",
      duration: "3.00 Hrs",
      students: "60 Students"
    }
  ];
  
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
}
