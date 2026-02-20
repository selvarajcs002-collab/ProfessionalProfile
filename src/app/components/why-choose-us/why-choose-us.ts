import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="why-choose-us" class="py-24 bg-[#0f172a]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="text-[#d4af37] font-bold uppercase tracking-widest text-sm mb-4 block">The Advantage</span>
            <h2 class="text-4xl md:text-5xl font-bold font-serif text-white mb-8">Why Brands Trust SS Embroidery</h2>
            
            <div class="space-y-8">
              <div *ngFor="let reason of reasons" class="flex gap-6">
                <div class="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center flex-shrink-0 text-[#d4af37]">
                   <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" [innerHTML]="reason.icon"></svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white mb-2">{{reason.title}}</h3>
                  <p class="text-slate-400">{{reason.desc}}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-[#d4af37]/20 to-transparent p-px rounded-3xl">
            <div class="bg-slate-900 p-12 rounded-3xl relative overflow-hidden">
               <div class="absolute top-0 right-0 p-8">
                  <svg class="w-24 h-24 text-[#d4af37]/10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.99L18.53 17H5.47L12 5.99zM11 14h2v2h-2v-2zm0-4h2v2h-2v-2z"></path></svg>
               </div>
               <h3 class="text-3xl font-bold text-white mb-6">Ready to start your production?</h3>
               <p class="text-slate-400 mb-8">Experience the blend of traditional craftsmanship and modern technology.</p>
               <a href="#contact" class="inline-block bg-[#d4af37] text-[#0f172a] font-bold px-10 py-4 rounded-full hover:bg-white transition-all duration-300 shadow-xl shadow-[#d4af37]/20">Request a Sample</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class WhyChooseUs {
  reasons = [
    {
      title: 'High-Speed Precision',
      desc: 'Computerized multi-head machines ensuring consistent stitch quality across thousands of pieces.',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />'
    },
    {
      title: 'Fast Turnaround',
      desc: 'Optimized production workflows to meet tight deadlines without compromising on quality.',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />'
    },
    {
      title: 'Competitive Pricing',
      desc: 'Scalable solutions that offer the best value for bulk contract manufacturing.',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />'
    }
  ];
}
