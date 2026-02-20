import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-suppliers',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="suppliers" class="py-24 bg-[#0f172a] overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-[#d4af37] font-bold uppercase tracking-widest text-sm mb-4 block">Our Partners</span>
          <h2 class="text-4xl font-bold font-serif text-white mb-6">Our Trusted Supplier Network</h2>
          <p class="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
            We maintain long-term relationships with leading material suppliers who share our commitment to excellence. By sourcing premium embroidery threads, backing materials, and accessories, we ensure superior stitch finish, vibrant colors, and lasting durability in every project.
          </p>
        </div>
        
        <div class="relative mt-20">
          <div class="flex marquee whitespace-nowrap gap-12 py-8">
            <div *ngFor="let supplier of duplicatedSuppliers" class="inline-block bg-slate-900 px-10 py-6 rounded-2xl border border-slate-800 text-white font-bold text-xl tracking-wider hover:border-[#d4af37] transition-colors duration-300 shadow-xl">
              {{ supplier }}
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .marquee {
      display: flex;
      width: max-content;
      animation: marquee 30s linear infinite;
    }

    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    section:hover .marquee {
      animation-play-state: paused;
    }
  `]
})
export class Suppliers {
  suppliers = [
    'TECHNO SPORTWEAR PVT LTD',
    'KKP FINE LINEN PVT LTD',
    'Marathon Embroidery',
    'Madeira India',
    'Amsura Backings',
    'Prakash Needles',
    'KDS Accessories'
  ];

  // Duplicate the list for seamless infinite loop
  get duplicatedSuppliers() {
    return [...this.suppliers, ...this.suppliers];
  }
}
