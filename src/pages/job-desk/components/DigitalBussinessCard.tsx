
const DigitalBussinessCard = () => {
  return (
    <div>
      <section className="body-font h-screen bg-gray-100 pt-10 text-gray-600">
        <div className="container mx-auto mt-10 flex max-w-3xl flex-wrap justify-center rounded-lg bg-white px-5 py-20">

          <div className="flex-wrap md:flex">
            <div className="mx-auto">
              <img className="mx-auto mt-12 h-52 w-52 rounded-lg border p-2 md:mt-0" src="https://i.imgur.com/FQS7fFC.png" alt="step" />
              <div>
                <h1 className="font-laonoto mt-4 text-center text-xl font-bold">Readyassist</h1>
                <p className="mt-2 text-center font-semibold text-gray-600">ANKIT SAH</p>
                <p className="mt-1 text-center font-medium text-red-500">Emp Id - 10001</p>
              </div>



            </div>

            <div className="mt-8 max-w-sm md:mt-0 md:ml-10 md:w-2/3">
              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                </div>
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                  <svg fill="none" stroke="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">STEP 1</h2>
                  <p className="font-laonoto leading-relaxed">
                    Download mobile app form Playstore and Open
                  </p>
                </div>
              </div>
              <div className="relative flex pb-12">
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                </div>
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                  <svg fill="none" stroke="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">STEP 2</h2>
                  <p className="font-laonoto leading-relaxed">Click On Approve Button</p>
                </div>
              </div>
              <div className="relative flex pb-12">
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                  <svg fill="none" stroke="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">STEP 3</h2>
                  <p className="font-laonoto leading-relaxed">Submit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default DigitalBussinessCard