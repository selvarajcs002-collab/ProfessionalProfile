import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: `
    <footer id="contact" class="bg-[#0f172a] pt-24 pb-12 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 class="text-4xl font-bold text-white mb-8 font-serif">Let's Discuss Your Project</h2>
            <div class="space-y-6">
              <div class="flex items-center gap-6">
                 <div class="w-12 h-12 bg-[#d4af37]/10 rounded-xl flex items-center justify-center text-[#d4af37]">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                 </div>
                 <p class="text-slate-300">123, Embroidery Lane, Textile Hub, Industrial Area, City - 400001</p>
              </div>
              <div class="flex items-center gap-6">
                 <div class="w-12 h-12 bg-[#d4af37]/10 rounded-xl flex items-center justify-center text-[#d4af37]">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                 </div>
                 <p class="text-slate-300">+91 98765 43210</p>
              </div>
              <div class="flex items-center gap-6">
                 <div class="w-12 h-12 bg-[#d4af37]/10 rounded-xl flex items-center justify-center text-[#d4af37]">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 012-2V7a2 2 0 01-2-2H5a2 2 0 01-2 2v10a2 2 0 012 2z" /></svg>
                 </div>
                 <p class="text-slate-300">contact&#64;ssembroidery.com</p>
              </div>
            </div>
            
            <div class="mt-12">
               <a href="https://wa.me/919876543210" class="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.502-5.69-1.451l-6.303 1.654zm6.304-3.705c1.547.917 3.46 1.403 5.432 1.404h.01c5.451 0 9.886-4.437 9.889-9.891.002-2.642-1.026-5.125-2.898-6.999-1.872-1.875-4.355-2.903-6.997-2.904-5.453 0-9.888 4.437-9.89 9.891-.001 1.83.501 3.615 1.453 5.149l-.946 3.454 3.537-.928zm10.164-6.845c-.279-.14-1.65-.814-1.905-.907-.255-.093-.441-.14-.627.14-.186.279-.719.907-.882 1.092-.163.186-.325.21-.604.07-.279-.14-1.18-.435-2.246-1.385-.83-.741-1.39-1.654-1.553-1.933-.163-.279-.017-.43.123-.569.124-.124.279-.325.418-.488.14-.163.186-.279.279-.465.093-.186.046-.349-.023-.488-.07-.139-.627-1.511-.859-2.07-.227-.544-.457-.47-.627-.478-.163-.008-.349-.01-.534-.01s-.488.07-.741.349c-.255.279-.976.953-.976 2.325s1.021 2.704 1.16 2.89c.14.186 2.012 3.072 4.874 4.312.682.296 1.213.473 1.626.604.685.218 1.31.187 1.804.113.551-.083 1.65-.674 1.882-1.325.233-.651.233-1.209.163-1.325-.07-.116-.255-.186-.534-.326z"/></svg>
                  Connect on WhatsApp
               </a>
            </div>
          </div>
          
          <div class="h-96 rounded-3xl overflow-hidden bg-slate-800 border border-slate-700">
             <!-- Placeholder for Google Map -->
             <div class="w-full h-full flex items-center justify-center text-slate-500">
                <div class="text-center">
                   <svg class="w-12 h-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                   <p>Interactive Map View</p>
                </div>
             </div>
          </div>
        </div>
        
        <div class="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
           <p class="text-slate-500 text-sm">&copy; 2024 SS Embroidery Works. All rights reserved.</p>
           <div class="flex gap-8">
              <a href="#" class="text-slate-500 hover:text-[#d4af37] text-sm">Privacy Policy</a>
              <a href="#" class="text-slate-500 hover:text-[#d4af37] text-sm">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  `,
  styles: [],
})
export class Contact { }
