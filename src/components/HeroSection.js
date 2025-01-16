import Image from 'next/image'
import Link from 'next/link'
import MobileNav from './MobileNav'

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0605] via-[#1A0F00] to-[#2C1810]">
      <MobileNav />
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Book Cover */}
          <div className="relative h-[600px] w-full rounded-[2rem] overflow-hidden">
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
              <Image
                src="/images/book-cover.jpg"
                alt="Saudamini Book Cover"
                fill
                className="object-contain rounded-[2rem]"
                style={{ borderRadius: '2rem' }}
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-white space-y-6">
            <h1 className="text-6xl md:text-7xl font-serif bg-gradient-to-r from-amber-700 to-maroon-800 bg-clip-text text-transparent">
              Saudamini
            </h1>
            <p className="text-xl md:text-2xl font-light text-amber-100/90">
              A Journey Through 1870s Bengal
            </p>
            <p className="text-lg md:text-xl text-amber-100/80">
              Written by Mamata Sarkar | Available as an e-book
            </p>
            <Link
              href="/purchase"
              className="inline-block px-8 py-3 bg-gradient-to-r from-amber-600 to-[#8B4513] 
              hover:from-amber-700 hover:to-[#6B3410] rounded-full text-lg 
              transition-all duration-300 shadow-lg text-amber-100"
            >
              Buy Now
            </Link>

            {/* Pre-order Banner */}
            <div className="mt-12 p-6 bg-gradient-to-r from-amber-900/30 to-[#8B4513]/30 rounded-xl backdrop-blur-sm border border-amber-900/20">
              <p className="text-xl font-semibold text-amber-100/90">We are overwhelmed with the positive response from you.</p>
              <p className="text-3xl font-bold mt-2 bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                5000+ Pre-orders for the e-Book!
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-serif text-amber-100/90 text-center mb-12">What Readers Are Saying</h2>
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-scroll hover:pause">
              {/* First set of testimonials */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-80 mx-3 bg-gradient-to-br from-[#1A0F00]/80 to-[#2C1810]/80 backdrop-blur-sm rounded-xl p-6 space-y-4 border border-amber-900/20"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-700/30">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-amber-100/90 font-semibold">{testimonial.name}</h3>
                      <p className="text-amber-100/80 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-amber-100/90">{testimonial.review}</p>
                </div>
              ))}
              {/* Duplicate set for seamless scrolling */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-80 mx-3 bg-gradient-to-br from-[#1A0F00]/80 to-[#2C1810]/80 backdrop-blur-sm rounded-xl p-6 space-y-4 border border-amber-900/20"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-700/30">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-amber-100/90 font-semibold">{testimonial.name}</h3>
                      <p className="text-amber-100/80 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-amber-100/90">{testimonial.review}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const testimonials = [
  {
    name: "Dr. Amartya Roy",
    title: "Professor of Bengali Literature",
    image: "/images/testimonials/reviewer1.jpg",
    review: "A masterfully crafted narrative that brings 1870s Bengal to life. The attention to historical detail is remarkable."
  },
  {
    name: "Mitali Ghosh",
    title: "Literary Critic",
    image: "/images/testimonials/reviewer2.jpg",
    review: "Saudamini is not just a story; it's a window into our cultural heritage. A must-read for everyone."
  },
  {
    name: "Rajesh Sharma",
    title: "Book Reviewer",
    image: "/images/testimonials/reviewer3.jpg",
    review: "The character development is exceptional. I couldn't put it down until I finished the last page."
  },
  {
    name: "Priya Sen",
    title: "Historical Fiction Author",
    image: "/images/testimonials/reviewer4.jpg",
    review: "A beautiful blend of history and storytelling. The research that went into this book is evident in every chapter."
  }
]

export default HeroSection