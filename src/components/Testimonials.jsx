// import React from 'react'

function Testimonials() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-gray-800 text-3xl font-semibold">Testimonials</h2>

        <div className="flex flex-wrap justify-center mt-8">
          {/* comment 1 */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">
                - Amazing sevice! I'm very satisfied with their work. -
              </p>
              <p className="text-gray-800 font-semibold mt-4">Hanako Urawa</p>
            </div>
          </div>

          {/* comment 2 */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">
                - とてもいいサービスだと思います。 -
              </p>
              <p className="text-gray-800 font-semibold mt-4">Noa Ushio</p>
            </div>
          </div>

          {/* comment 3 */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">
                - いい経験になりましたし、便利だと思います。 -
              </p>
              <p className="text-gray-800 font-semibold mt-4">Ako Amau</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

