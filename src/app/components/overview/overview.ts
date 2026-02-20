import { Component } from '@angular/core';
import assetsData from '../../assets-data.json';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [],
  template: `
    <section id="overview" class="py-24 bg-[#0f172a]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="relative">
            <div class="border-2 border-[#d4af37] p-4 rounded-2xl">
               <img [src]="assetsData.overview.image" 
                    alt="Company Overview" 
                    class="rounded-xl grayscale hover:grayscale-0 transition-all duration-700">
            </div>
            <div class="absolute -top-10 -left-10 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-2xl"></div>
          </div>
          
          <div>
            <span class="text-[#d4af37] font-bold uppercase tracking-widest text-sm mb-4 block">Our Legacy</span>
            <h2 class="text-4xl md:text-5xl font-bold font-serif text-white mb-6 leading-tight">
              Crafting Excellence <br/>Since 2007
            </h2>
            <p class="text-slate-300 text-lg mb-6 leading-relaxed">
              Established in 2007, **SS Embroidery Works** is a leading computerized embroidery service provider specializing in bulk garment embroidery for apparel brands, uniform suppliers, and textile manufacturers.
            </p>
            <p class="text-slate-400 mb-8 leading-relaxed">
              Our journey began with a vision to redefine garment customization through technology. Today, we stand as a trusted partner for B2B clients who demand precision, speed, and consistency at scale.
            </p>
            
            <div class="grid grid-cols-2 gap-6">
              <div class="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p class="text-[#d4af37] font-bold text-sm uppercase mb-2">Established</p>
                <p class="text-white text-2xl font-bold">2007</p>
              </div>
              <div class="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p class="text-[#d4af37] font-bold text-sm uppercase mb-2">Experience</p>
                <p class="text-white text-2xl font-bold">15+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class Overview {
  protected readonly assetsData = assetsData;
}
