
const RequestedAttendance = () => {
  return (
    <div>

      <section className="bg-white p-5 m-5 rounded">
        <h3 className="text-2xl mb-5">
          Report/Stats Title
          <p className="text-gray-400 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            laborum.
          </p>
        </h3>

        <div
          className="flex gap-5 p-10 max-w-max border border-gray-300 rounded"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold pb-2">0%</h2>
            <h4 className="inline text-gray-500 text-sm">Last Year</h4>
          </div>
          <div>
            <svg
              className="fill-teal-500"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"

              x="0px"
              y="0px"
              width="44.952px"
              height="44.952px"
              viewBox="0 0 44.952 44.952"

            >
              <g>
                <path
                  d="M44.952,22.108c0-1.25-0.478-2.424-1.362-3.308L30.627,5.831c-0.977-0.977-2.561-0.977-3.536,0
                    c-0.978,0.977-0.976,2.568,0,3.546l10.574,10.57H2.484C1.102,19.948,0,21.081,0,22.464c0,0.003,0,0.025,0,0.028
                    c0,1.382,1.102,2.523,2.484,2.523h35.182L27.094,35.579c-0.978,0.978-0.978,2.564,0,3.541c0.977,0.979,2.561,0.978,3.538-0.001
                    l12.958-12.97c0.885-0.882,1.362-2.059,1.362-3.309C44.952,22.717,44.952,22.231,44.952,22.108z"
                />
              </g>
            </svg>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold pb-2">0%</h2>
            <h4 className="inline text-gray-500 text-sm">This Year</h4>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 mt-8">
          <div className="w-full lg:w-1/5">
            <div className="p-2 rounded text-center bg-teal-500 text-white">
              Total
            </div>
            <div className="border border-gray-300 rounded text-center py-8 mt-2">
              <h2 className="text-4xl font-bold pb-2">0</h2>
              <h4 className="inline text-gray-500 text-sm">Total Employee</h4>
            </div>
          </div>

          <div className="w-full lg:w-2/5">
            <div className="p-2 rounded text-center bg-teal-500 text-white">
              Last Year
            </div>
            <div className="flex gap-5 mt-2">
              <div
                className="flex-grow border border-gray-300 rounded text-center py-8"
              >
                <h2 className="text-4xl font-bold pb-2">100</h2>
                <h4 className="inline text-gray-500 text-sm">Last Year Count</h4>
              </div>
              <div
                className="flex-grow border border-gray-300 rounded text-center py-8"
              >
                <h2 className="text-4xl font-bold pb-2">10%</h2>
                <h4 className="inline text-gray-500 text-sm">Last Year %</h4>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/5">
            <div className="p-2 rounded text-center bg-teal-500 text-white">
              This Year
            </div>
            <div className="flex gap-5 mt-2">
              <div
                className="flex-grow border border-gray-300 rounded text-center py-8"
              >
                <h2 className="text-4xl font-bold pb-2">200</h2>
                <h4 className="inline text-gray-500 text-sm">This Year Count</h4>
              </div>
              <div
                className="flex-grow border border-gray-300 rounded text-center py-8"
              >
                <h2 className="text-4xl font-bold pb-2">20%</h2>
                <h4 className="inline text-gray-500 text-sm">This Year %</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RequestedAttendance