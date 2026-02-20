import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="portfolio" class="py-24 bg-[#0f172a]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span class="text-[#d4af37] font-bold uppercase tracking-widest text-sm mb-4 block">Our Gallery</span>
            <h2 class="text-4xl md:text-5xl font-bold font-serif text-white leading-tight">Showcasing Our <br/>Masterpieces</h2>
          </div>
          <div class="flex gap-4">
             <button class="bg-slate-800 text-white px-6 py-2 rounded-full border border-slate-700 hover:border-[#d4af37] transition-all">All</button>
             <button class="text-slate-400 hover:text-white px-6 py-2">Corporate</button>
             <button class="text-slate-400 hover:text-white px-6 py-2">Fashion</button>
          </div>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           <div *ngFor="let item of items" class="group relative overflow-hidden rounded-3xl bg-slate-800 aspect-[4/5]">
              <img [src]="item.img" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0">
              <div class="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                 <p class="text-[#d4af37] text-sm font-bold uppercase mb-2">{{item.category}}</p>
                 <h3 class="text-white text-2xl font-bold">{{item.title}}</h3>
              </div>
           </div>
        </div>
        
        <div class="mt-16 text-center">
           <a href="#" class="inline-block border-b-2 border-[#d4af37] text-[#d4af37] font-bold pb-2 hover:text-white hover:border-white transition-all">View Full Portfolio</a>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class Portfolio {
  items = [
    { title: 'Corporate Branding', category: 'Uniforms', img: 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=1000' },
    { title: 'Premium Polo Logs', category: 'Apparel', img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000' },
    { title: 'Custom Jacket Patch', category: 'Fashion', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000' }
  ];
}
