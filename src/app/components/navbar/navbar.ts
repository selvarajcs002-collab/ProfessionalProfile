import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <nav class="fixed w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-[#d4af37]/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <div class="flex-shrink-0 flex items-center">
            <span class="text-[#d4af37] font-serif text-2xl font-bold tracking-wider">SS EMBROIDERY</span>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <a href="#" class="text-slate-100 hover:text-[#d4af37] px-3 py-2 transition-colors duration-300">Home</a>
              <a href="#services" class="text-slate-100 hover:text-[#d4af37] px-3 py-2 transition-colors duration-300">Services</a>
              <a href="#portfolio" class="text-slate-100 hover:text-[#d4af37] px-3 py-2 transition-colors duration-300">Portfolio</a>
              <a href="#contact" class="bg-[#d4af37] text-[#0f172a] font-bold px-6 py-2 rounded-full hover:bg-white transition-all duration-300 shadow-lg shadow-[#d4af37]/20">Get Quote</a>
            </div>
          </div>
          <div class="md:hidden">
            <button class="text-[#d4af37]">
              <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class Navbar { }
