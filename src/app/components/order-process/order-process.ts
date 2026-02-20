import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-process',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="order-process" class="py-24 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-[#d4af37] font-bold uppercase tracking-widest text-sm mb-4 block">The Workflow</span>
          <h2 class="text-4xl font-bold font-serif text-white mb-6">Our Seamless Process</h2>
          <p class="text-slate-400 max-w-2xl mx-auto">From concept to delivery, we ensure a smooth and transparent experience for all our clients.</p>
        </div>
        
        <div class="relative">
          <div class="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>
          <div class="grid lg:grid-cols-4 gap-8 relative z-10">
            <div *ngFor="let step of steps; let i = index" class="bg-[#0f172a] p-8 rounded-3xl border border-slate-700 text-center">
              <div class="w-12 h-12 bg-[#d4af37] text-[#0f172a] font-bold rounded-full flex items-center justify-center mx-auto mb-6 text-xl">
                {{i + 1}}
              </div>
              <h3 class="text-xl font-bold text-white mb-4">{{step.title}}</h3>
              <p class="text-slate-400 text-sm leading-relaxed">{{step.desc}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class OrderProcess {
  steps = [
    { title: 'Receive Design', desc: 'Submit your design files in DST, EMB, or JPG format for review.' },
    { title: 'Sample Approval', desc: 'We create a physical sample for your approval before bulk production.' },
    { title: 'Bulk Production', desc: 'Once approved, our high-speed machines begin the bulk stitching.' },
    { title: 'Quality & Delivery', desc: 'Every piece is inspected before being packed and delivered.' }
  ];
}
