import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="industries" class="py-24 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-[#d4af37] font-bold uppercase tracking-widest text-sm mb-4 block">Our Partners</span>
        <h2 class="text-4xl font-bold font-serif text-white mb-12">Industries We Serve</h2>
        
        <div class="flex flex-wrap justify-center gap-6">
          <div *ngFor="let industry of industries" class="bg-[#0f172a] px-8 py-6 rounded-2xl border border-slate-800 hover:border-[#d4af37]/50 transition-colors duration-300">
            <span class="text-white font-medium">{{industry}}</span>
          </div>
        </div>
        
        <div class="mt-16 text-slate-400 italic">
          "Trusted by 50+ apparel brands and uniform manufacturers nationwide."
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class Industries {
  industries = [
    'Garment Manufacturers',
    'School Uniform Suppliers',
    'Corporate Companies',
    'Sportswear Brands',
    'Fashion Designers',
    'Promotional Merchandise'
  ];
}
