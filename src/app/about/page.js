import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Book Summary */}
        <div className="mb-16">
          <h2 className="text-4xl font-serif mb-8 gradient-text">About the Book</h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Set in the vibrant landscape of 1870s Bengal, "Saudamini" weaves a compelling tale of love, tradition, and social transformation. The story follows our protagonist, Saudamini, as she navigates the complexities of a society in transition, where ancient customs clash with emerging modern ideals.
            </p>
            <p className="text-lg mb-4">
              Through richly detailed narrative and authentic historical backdrop, the novel explores themes of women's empowerment, social reform, and the preservation of cultural heritage during a pivotal time in Bengal's history.
            </p>
            <Link href="/about/synopsis" className="inline-block mt-4 text-maroon-800 hover:text-amber-700 font-semibold">
              Read Full Synopsis →
            </Link>
          </div>
        </div>

        {/* Author Spotlight */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/images/author.jpg"
              alt="Mamata Sarkar"
              fill
              className="object-contain"
              style={{ objectPosition: 'center center' }}
              priority
            />
          </div>
          <div>
            <h2 className="text-4xl font-serif mb-6 gradient-text">About the Author</h2>
            <p className="text-lg mb-4">
              Mamata Sarkar is a renowned Bengali author known for her deep understanding of Bengali culture and history. With over two decades of research and writing experience, she brings historical Bengal to life through her vivid storytelling.
            </p>
            <p className="text-lg">
              Her works have been celebrated for their authentic portrayal of Bengali society and their contribution to contemporary Bengali literature. "Saudamini" is her latest masterpiece, combining historical accuracy with compelling storytelling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 