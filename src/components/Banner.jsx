export const Banner = () => {
  return (
    <div className="container my-12 px-6 mx-auto">
    <section className="mb-32 text-gray-800 text-center lg:text-left">
      <div className="container mx-auto xl:px-32 text-center lg:text-left">
        <div className="md:flex justify-center">
          <div className="mb-12 lg:mb-0">
            <div
              className="relative block rounded-lg shadow-lg px-6 py-12 md:px-12 z-10 bg-indigo-400"
            >
              <h2 className="text-3xl font-bold mb-4">¿Qué ofrecemos?</h2>
              <p className="text-white text-2xl mb-12 lg:h-1/2">
                Tenemos productos de alta calidad, todo lo mas nuevo en tecnologia con amplia garantia
              </p>
  
              <div className="flex md:flex1/3 justify-around gap-x-6">
                <div className="mb-12 md:mb-0">
                  <h3 className="text-lg font-medium text-white mb-0">Tecnologia</h3>
                </div>
  
                <div className="mb-12 md:mb-0">
                  <h3 className="text-lg font-medium text-white mb-0">Productos de calidad</h3>
                </div>
              </div>
            </div>
          </div>
  
          <div>
            <img
              src="./samsung.jpg"
              className="w-full shadow-lg fancy-border-radius rotate-lg-6 md:rotate-[6deg]"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>  
  </div>
  );
}
