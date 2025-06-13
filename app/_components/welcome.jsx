"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { motion } from "motion/react";
import { ScrollUpButton } from "./scroll-up-button";
import GlassBadge from "./glass-badge";
import { faInstagram, faFacebookF, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Welcome() {
  return (
    <main className="flex flex-col justify-start items-center w-full bg-white text-gray-700 font-sans">
      {/* Home */}
      <section id="home" className="w-full">
        <div className="relative h-screen bg-cover bg-center" style={{
          backgroundImage: "url(https://scontent-yyz1-1.xx.fbcdn.net/v/t39.30808-6/493322983_122109339878841324_2014769173927702346_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lgZKst6O_hsQ7kNvwGQug1S&_nc_oc=AdmaRD80ZKExUbf73OuXfzwFaZRX60j2bNYDeeNPtaZRDmK0KO522940WfaqLmaB8yw&_nc_zt=23&_nc_ht=scontent-yyz1-1.xx&_nc_gid=QCdvyWxYVqD3lr3z2GY5uw&oh=00_AfPMmRBAhbLA86wibJmjkUQlNKqtVBUIRFmlSb_sugqp3g&oe=68514477)"
        }}>
          <div className="relative z-10 h-full flex flex-col sm:flex-row justify-center items-center gap-10 px-4 sm:-translate-y-20">
            <div className="max-w-lg text-white">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-5 text-5xl sm:text-6xl font-serif font-semibold tracking-tight"
              >
                Tiana Young Photography
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mb-5 text-lg sm:text-xl leading-relaxed text-gray-100"
              >
                Professional photography with a personal touch. Specializing in portraits, weddings, and family moments.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                <Link href="" className="flex items-center text-lg gap-2 underline text-white hover:text-gray-200">
                  <FontAwesomeIcon icon={faArrowRight} />
                  <p>Read More</p>
                </Link>
              </motion.div>
            </div>
            <div className="flex flex-wrap w-full sm:w-1/2 gap-2">
              {['Couple Photos', 'Graduation Photos', 'Family Photos', 'Photo Editing'].map((label, idx) => (
                <GlassBadge key={idx}>
                  <p className="text-sm sm:text-lg text-white font-sans">{label}</p>
                </GlassBadge>
              ))}
              <GlassBadge>
                <p className="text-sm sm:text-lg text-green-500">Request Booking Now</p>
              </GlassBadge>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="w-full py-24 bg-gray-50">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-serif font-bold text-gray-800">Gallery</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-6">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <img
              key={i}
              src={`https://source.unsplash.com/random/800x600?sig=${i}`}
              alt={`Gallery ${i}`}
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 object-cover w-full h-64"
            />
          ))}
        </div>
      </section>

      {/* Reviews Carousel */}
      <section id="reviews" className="w-full py-24 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-gray-800">Client Testimonials</h2>
          <p className="text-gray-500 text-sm sm:text-base">What people are saying</p>
        </div>
        <div className="w-full flex justify-center">
          <div className="carousel carousel-center rounded-box max-w-5xl w-full p-4 space-x-4 bg-gray-100 shadow">
            {["Emily R.", "Mark D.", "Sophia L.", "Jason P.", "Ava G."].map((name, i) => (
              <div key={i} className="carousel-item w-[300px] bg-white text-gray-800 rounded-xl shadow-md p-4 flex flex-col gap-2">
                <p className="italic font-serif text-gray-600">"Tiana was amazing! Loved every photo we got."</p>
                <span className="text-right font-semibold text-gray-500">– {name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="w-full py-24 bg-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
          <img src="/hero-2.jpg" alt="Tiana" className="rounded-lg shadow-lg max-w-sm" />
          <div>
            <h2 className="text-4xl font-serif italic mb-4 text-gray-900">About Me</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm Tiana Young, a Calgary-based photographer with a passion for capturing authentic moments. Whether it's a family shoot or a wedding, I aim to create timeless, heartfelt photos you'll treasure forever.
            </p>
            <div className="space-y-2 text-gray-600">
              <div><FontAwesomeIcon icon={faEnvelope} className="mr-2 text-accent" /> tianayoungphotography@gmail.com</div>
              <div><FontAwesomeIcon icon={faPhone} className="mr-2 text-accent" /> 403-467-3873</div>
            </div>
            <div className="flex gap-4 mt-4 text-accent">
              <Link href="https://www.instagram.com/tianayoungphotography" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
              <Link href="https://www.facebook.com/tianayoungphotography" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></Link>
              <Link href="https://www.twitter.com" target="_blank"><FontAwesomeIcon icon={faXTwitter} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top */}
      <div className="fixed bottom-6 right-6 z-50">
        <ScrollUpButton />
      </div>
    </main>
  );
}
