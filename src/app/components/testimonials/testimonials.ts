import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="testimonials" class="py-24 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-[#d4af37] font-bold uppercase tracking-widest text-sm mb-4 block">Trust Factor</span>
          <h2 class="text-4xl font-bold font-serif text-white">Client Testimonials</h2>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div *ngFor="let t of testimonials" class="bg-[#0f172a] p-10 rounded-3xl border border-slate-800 relative flex flex-col justify-between">
            <div>
              <div class="text-[#d4af37] mb-6">
                 <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C15.3601 14 14.017 12.6569 14.017 11V7H20.017V11H17.017C17.017 12.1046 17.9124 13 19.017 13H21.017V21H14.017ZM3.01701 21L3.01701 18C3.01701 16.8954 3.91242 16 5.01701 16H8.01701V14H6.01701C4.36016 14 3.01701 12.6569 3.01701 11V7H9.01701V11H6.01701C6.01701 12.1046 6.91242 13 8.01701 13H10.017V21H3.01701Z"></path></svg>
              </div>
              <p class="text-slate-300 text-lg italic leading-relaxed mb-8">"{{t.quote}}"</p>
            </div>
            <div class="flex items-center gap-4 pt-6 border-t border-slate-800/50">
               <div class="w-12 h-12 bg-slate-700/50 rounded-full flex items-center justify-center text-white font-bold">{{t.name.charAt(0)}}</div>
               <div class="flex flex-wrap items-baseline gap-2">
                  <p class="text-white font-bold">{{t.name}}</p>
                  <span class="text-slate-600 text-xs">—</span>
                  <p class="text-[#d4af37] text-sm">{{t.role}}</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class Testimonials {
  testimonials = [
    { quote: 'We have been working with this embroidery team for years, and their 15+ years of industry experience truly shows. The stitch quality is consistently excellent, and they always deliver on time, even for bulk orders. Their commitment to precision and punctuality is highly commendable.', name: 'PethuRaj', role: 'Director' },
    { quote: 'Their experience in the embroidery field is clearly reflected in the flawless finishing of every piece. They maintain strict quality checks and never compromise on delivery timelines. It’s rare to find such reliability and consistency in bulk production.', name: 'Murugan G', role: 'Director' }
  ];
}
