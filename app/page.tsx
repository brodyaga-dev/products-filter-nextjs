export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        {/* filters sidebar section  */}
        <section></section>

        {/*  products grid section  */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <img
              alt="Sneaker 1"
              className="aspect-square object-cover rounded-lg border border-gray-200 dark:border-gray-800"
              height={400}
              src="https://plus.unsplash.com/premium_photo-1701172277688-32d05010526a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
              width={400}
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-lg md:text-xl">
                Classic Canvas Sneakers
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Timeless style
              </p>
              <h4 className="font-semibold text-base md:text-lg">$49.99</h4>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
