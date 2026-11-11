import Image from 'next/image';
import React from 'react';

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:falktuva@proton.me',
    value: 'falktuva@proton.me'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tuva-falk/',
    value: 'linkedin.com/in/tuva-falk'
  }
];

export default function ContactPage() {
  return (
    <main className="min-h-[calc(100vh-6rem)] bg-[#F5F1E7] px-6 py-20 text-[#1A2B3C] md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[360px]">
            <div className="absolute -inset-4 rounded-[32%_68%_61%_39%/42%_38%_62%_58%] bg-[#9EAEA2]/30 blur-2xl" />
            <Image
              src="/images/tuva-arctiffrontiers2.JPG"
              alt="Tuva Falk at Arctic Frontiers"
              width={900}
              height={1100}
              className="relative h-[440px] w-full rounded-[32%_68%_61%_39%/42%_38%_62%_58%] object-cover shadow-[0_25px_70px_rgba(26,43,60,0.18)]"
            />
          </div>
        </div>

        <div className="w-full">

          <h1 className="mb-6 font-serif text-5xl leading-tight md:text-6xl">
            Let's build something thoughtful.
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-8 text-[#2B3742]">
            Whether you are looking for someone who can work across AI, design, research, and product thinking, or just want to connect, I&apos;d love to hear from you.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {contactLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === 'LinkedIn' ? '_blank' : undefined}
                rel={link.label === 'LinkedIn' ? 'noreferrer' : undefined}
                className={
                  index === 0
                    ? 'inline-flex items-center gap-2 rounded-full bg-[#1A2B3C] px-6 py-3 font-semibold text-[#F5F1E7] transition-colors hover:bg-[#34495b]'
                    : 'inline-flex items-center rounded-full border border-[#1A2B3C]/20 bg-white/70 px-6 py-3 font-semibold text-[#1A2B3C] transition-colors hover:bg-white'
                }
              >
                {link.label === 'Email' ? 'Email me' : 'or dropp a message on LinkedIn'}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}