import Link from 'next/link'
export default function FamiliesComponent(){
    let integers = [1, 2, 3, 4, 5, 6, 7, 8]
    return(
    <div className="w-full md:flex">
      <div
        className="w-full bg-white rounded pt-3 pb-1 md:px-8 md:py-3 mr-3 unlimited"
      >
        <div className="w-full md:flex mb-4 items-center justify-between">
          <div className="md:w-4/12">
          <h3 className="font-semibold px-3 py-1 text-xl">Families listing</h3>
        </div>
          <div className="flex justify-between md:w-7/12">
          <span className="px-3 py-1 font-semibold text-successorColor underline"
            ><Link href="/gorillas"><a>View all gorillas</a></Link></span
          >
          <div className="bg-green-600 rounded p-2 cursor-pointer"><h3 className="text-white">New Family</h3></div>
        </div>
        </div>
        <table className="w-full justify-between mt-0">
          <thead className="w-full">
            <tr
              className="justify-between"
            >
              <th className="p-4 text-center w-1/7"></th>
              <th className="p-4 text-center w-1/7">Family name</th>
              <th className="p-4 text-center w-1/7">Number of members</th>
              <th className="p-4 text-center w-1/7">Head father</th>
              <th className="p-4 text-center w-1/7">Date founded</th>
            </tr>
          </thead>
          <tbody
            className="limitedTable overflow-y-auto"
          >
            {integers.map(int=>(
              <tr
                className="mt-3 justify-between bg-white border-b hover:border-green-400 transition-all cursor-pointer"
              >
                <td className="text-center p-4 w-1/7">{int}</td>
                <td className="text-center p-4 w-1/7"
                  >Gahinga</td
                >
                <td className="text-center p-4 w-1/7"> {Math.round((int*int/(int+1))+5*int)}</td>
                <td className="text-center p-4 w-1/7">Amahoro</td>
                <td className="text-center p-4 w-1/7">December 2017</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
}