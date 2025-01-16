export default function Events() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif mb-12 gradient-text">Upcoming Events</h1>

        {/* Book Fair Event */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-serif mb-4">International Kolkata Book Fair 2025</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Event Details</h3>
              <ul className="space-y-3">
                <li>
                  <span className="font-semibold">Dates:</span> January 28 – February 9, 2025
                </li>
                <li>
                  <span className="font-semibold">Location:</span> Central Park, Salt Lake, Kolkata
                </li>
                <li>
                  <span className="font-semibold">Stall Number:</span> Hall 2, Stall 45
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Meet the Author</h3>
              <ul className="space-y-3">
                <li>
                  <span className="font-semibold">Book Signing:</span> January 30, 2025 (3 PM - 5 PM)
                </li>
                <li>
                  <span className="font-semibold">Author Talk:</span> February 2, 2025 (4 PM - 5 PM)
                </li>
                <li>
                  <span className="font-semibold">Panel Discussion:</span> February 5, 2025 (2 PM - 3:30 PM)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 