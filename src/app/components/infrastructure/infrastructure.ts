import { Component } from '@angular/core';

@Component({
  selector: 'app-infrastructure',
  standalone: true,
  imports: [],
  template: `
    <section id="infrastructure" class="py-24 bg-[#0f172a] relative overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#d4af37]/5 blur-3xl rounded-full"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16">
          <span class="text-[#d4af37] font-bold uppercase tracking-widest text-sm mb-4 block">Our Powerhouse</span>
          <h2 class="text-4xl md:text-5xl font-bold font-serif text-white mb-6">Infrastructure & Capacity</h2>
          <p class="text-slate-400 max-w-2xl mx-auto">Equipped with state-of-the-art multi-head machines to handle high-volume production with unmatched precision.</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-slate-800/40 backdrop-blur-sm p-10 rounded-3xl border border-slate-700 text-center">
            <div class="text-5xl font-bold text-[#d4af37] mb-4">05</div>
            <p class="text-white text-xl font-bold mb-2">Multi-head Machines</p>
            <p class="text-slate-400 text-sm">Industrial grade high-speed machines</p>
          </div>
          
          <div class="bg-slate-800/40 backdrop-blur-sm p-10 rounded-3xl border border-[#d4af37]/30 text-center scale-105 shadow-2xl shadow-[#d4af37]/10">
            <div class="text-6xl font-bold text-[#d4af37] mb-4">40</div>
            <p class="text-white text-2xl font-bold mb-2">Total Heads</p>
            <p class="text-slate-400 text-sm">Synchronized production capability</p>
          </div>
          
          <div class="bg-slate-800/40 backdrop-blur-sm p-10 rounded-3xl border border-slate-700 text-center">
            <div class="text-5xl font-bold text-[#d4af37] mb-4">5k+</div>
            <p class="text-white text-xl font-bold mb-2">Daily Pieces</p>
            <p class="text-slate-400 text-sm">Ready for bulk contract manufacturing</p>
          </div>
        </div>
        
        <div class="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div class="bg-slate-900 p-8 rounded-3xl border border-slate-700">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <svg class="w-6 h-6 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Quality Assurance
            </h3>
            <ul class="space-y-4">
              <li class="flex items-start gap-3 text-slate-400">
                <span class="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                In-house dedicated design and digitizing team.
              </li>
              <li class="flex items-start gap-3 text-slate-400">
                <span class="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                Multi-stage quality inspection process for every piece.
              </li>
              <li class="flex items-start gap-3 text-slate-400">
                <span class="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                Use of premium threads and backings for longevity.
              </li>
            </ul>
          </div>
          <div class="grid grid-cols-2 gap-4">
             <img src="https://images.unsplash.com/photo-1558238211-c44f24300977?q=80&w=1000&auto=format&fit=crop" class="rounded-2xl h-48 w-full object-cover">
             <img src="https://images.unsplash.com/photo-1613501708817-640107779f42?q=80&w=1000&auto=format&fit=crop" class="rounded-2xl h-48 w-full object-cover">
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class Infrastructure { }
