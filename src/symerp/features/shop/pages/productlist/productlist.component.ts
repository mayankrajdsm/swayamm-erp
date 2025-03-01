import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  imports: [CommonModule],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss'
})
export class ProductlistComponent {

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

  getRatingStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  hasHalfStar(rating: number): boolean {
    return rating % 1 !== 0;
  }
}
