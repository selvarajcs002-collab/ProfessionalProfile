import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="py-24 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-[#d4af37] font-bold uppercase tracking-widest text-sm mb-4 block text-center">Our Expertise</span>
          <h2 class="text-4xl md:text-5xl font-bold font-serif text-white mb-6">Specialized Embroidery Services</h2>
          <p class="text-slate-400 max-w-2xl mx-auto">From branding to personalization, we offer a wide range of embroidery solutions on various fabric types with high precision.</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let service of services" class="group bg-[#0f172a] p-8 rounded-2xl border border-slate-700 hover:border-[#d4af37] transition-all duration-500 hover:-translate-y-2">
            <div class="w-16 h-16 bg-[#d4af37]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#d4af37] transition-colors duration-500">
              <svg class="w-8 h-8 text-[#d4af37] group-hover:text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" [innerHTML]="service.icon"></svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">{{service.title}}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">{{service.desc}}</p>
          </div>
        </div>
        
        <div class="mt-20 p-8 rounded-3xl bg-gradient-to-r from-[#d4af37]/10 via-transparent to-[#d4af37]/10 border border-[#d4af37]/20">
          <div class="grid md:grid-cols-3 gap-8 items-center text-center">
            <div>
              <p class="text-[#d4af37] font-bold text-sm uppercase mb-2">Fabric Types</p>
              <p class="text-white font-medium">Cotton, Poly-Cotton, Denims, Knits & More</p>
            </div>
            <div class="w-px h-12 bg-slate-700 hidden md:block mx-auto"></div>
            <div>
              <p class="text-[#d4af37] font-bold text-sm uppercase mb-2">Production Capacity</p>
              <p class="text-white font-medium">Bulk & Custom Orders (MOQ Applies)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class Services {
  services = [
    {
      title: 'Logo Embroidery',
      desc: 'High-definition logo stitching for corporate branding and apparel.',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />'
    },
    {
      title: 'Uniform Embroidery',
      desc: 'Durable and professional embroidery for schools and workplaces.',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />'
    },
    {
      title: 'Cap & Headwear',
      desc: 'Precision 3D and flat embroidery on various types of headwear.',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />'
    },
    {
      title: 'Customized Designs',
      desc: 'From sketches to stitches, we bring your unique designs to life.',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />'
    }
  ];
}
