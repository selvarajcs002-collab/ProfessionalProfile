import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import printData from './print-data.json';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Overview } from './components/overview/overview';
import { Services } from './components/services/services';
import { Infrastructure } from './components/infrastructure/infrastructure';
import { Industries } from './components/industries/industries';
import { WhyChooseUs } from './components/why-choose-us/why-choose-us';
import { OrderProcess } from './components/order-process/order-process';
import { Portfolio } from './components/portfolio/portfolio';
import { Testimonials } from './components/testimonials/testimonials';
import { Suppliers } from './components/suppliers/suppliers';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Navbar,
    Hero,
    Overview,
    Services,
    Infrastructure,
    Industries,
    WhyChooseUs,
    OrderProcess,
    Portfolio,
    Testimonials,
    Suppliers,
    Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ssproject');
  protected readonly printData = printData;
}
