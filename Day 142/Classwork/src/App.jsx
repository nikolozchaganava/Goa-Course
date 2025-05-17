import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Website() {
  const headerRef = useRef(null)
  const mainRef = useRef(null)
  const footerRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top',
        end: 'bottom',
        scrub: 0.5,
        toggleActions: 'play none none reverse', 
        markers: true
      },
    })

    gsap.to(mainRef.current, {
      x: -200,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: mainRef.current,
        start: 'top',
        end: 'bottom',
        scrub: 0.5,
        toggleActions: 'play none none reverse',
        markers: true
      },
    })

    gsap.to(footerRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top',
        end: 'bottom',
        scrub: 0.5,
        toggleActions: 'play none none reverse',
        markers: true
      },
    })
  }, [])

  return (
    <div className="min-h-[200vh] bg-gray-100">
      <header ref={headerRef} className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">My Website</div>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main ref={mainRef} className="container mx-auto py-10 space-y-10">
        <section id="home" className="bg-white p-6 shadow-md rounded-md">
          <h2 className="text-3xl font-bold mb-4">Welcome to My Website</h2>
          <p className="text-gray-700">This is the home section with some introductory content.</p>
        </section>

        <section id="about" className="bg-white p-6 shadow-md rounded-md">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700">Learn more about what we do and our mission.</p>
        </section>

        <section id="services" className="bg-white p-6 shadow-md rounded-md">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-700">Discover the services we offer to our clients.</p>
        </section>

        <section id="contact" className="bg-white p-6 shadow-md rounded-md">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700">Get in touch with us for more information.</p>
        </section>
      </main>

      <footer ref={footerRef} className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 February 14th. Have fun!</p>
        </div>
      </footer>
    </div>
  )
}