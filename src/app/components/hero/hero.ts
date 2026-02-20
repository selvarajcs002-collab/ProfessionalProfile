import { Component } from '@angular/core';
import assetsData from '../../assets-data.json';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  template: `
    <div class="relative min-h-screen flex items-center overflow-hidden bg-[#0f172a]">
      <!-- Background Decorative Elements -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="text-center md:text-left">
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-white mb-6 leading-tight">
              Precision Stitches, <br/>
              <span class="text-[#d4af37]">Premium Quality.</span>
            </h1>
            <p class="text-lg text-slate-300 mb-8 max-w-xl">
              Leading computerized embroidery services specializing in bulk garment customization for brands, uniform suppliers, and textile manufacturers.
            </p>
            <div class="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#services" class="bg-[#d4af37] text-[#0f172a] font-bold px-8 py-4 rounded-full hover:bg-white transition-all duration-300 text-lg shadow-xl shadow-[#d4af37]/20">Explore Services</a>
              <a href="#overview" class="border-2 border-[#d4af37] text-[#d4af37] font-bold px-8 py-4 rounded-full hover:bg-[#d4af37] hover:text-[#0f172a] transition-all duration-300 text-lg">Our Story</a>
            </div>
            
            <div class="mt-12 flex items-center gap-8 justify-center md:justify-start">
              <div>
                <p class="text-3xl font-bold text-white">5k+</p>
                <p class="text-sm text-slate-400">Items/Day</p>
              </div>
              <div class="w-px h-10 bg-slate-700"></div>
              <div>
                <p class="text-3xl font-bold text-white">40+</p>
                <p class="text-sm text-slate-400">Machine Heads</p>
              </div>
              <div class="w-px h-10 bg-slate-700"></div>
              <div>
                <p class="text-3xl font-bold text-white">100%</p>
                <p class="text-sm text-slate-400">Quality Check</p>
              </div>
            </div>
          </div>
          
          <div class="relative hidden md:block">
            <div class="aspect-square bg-gradient-to-tr from-[#d4af37]/20 to-transparent p-1 rounded-2xl">
              <img [src]="assetsData.hero.image" 
                   alt="Embroidery Machine" 
                   class="w-full h-full object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
            </div>
            <div class="absolute -bottom-6 -right-6 bg-[#0f172a] border border-[#d4af37]/30 p-4 rounded-xl shadow-2xl">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-[#d4af37]/20 rounded-full flex items-center justify-center">
                   <svg class="w-6 h-6 text-[#d4af37]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.99L18.53 17H5.47L12 5.99zM11 14h2v2h-2v-2zm0-4h2v2h-2v-2z"></path></svg>
                </div>
                <div>
                  <p class="text-white font-bold text-sm">Industrial Grade</p>
                  <p class="text-slate-400 text-xs text-nowrap">Bulk Production Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class Hero {
  protected readonly assetsData = assetsData;
}
