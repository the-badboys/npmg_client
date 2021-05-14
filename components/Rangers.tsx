export default function RangersComponent(){
    let photoUrl = "https://avatars.githubusercontent.com/u/53856673?v=4";
    let integers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    return (
        <div>
    <div className="w-full md:flex">
      <div
        className="w-full bg-white rounded px-4 pt-3 pb-1 md:px-8 md:py-3 mr-3 unlimited"
      >
        <div className="w-full md:flex mb-4 items-center justify-between">
          <div className="md:w-4/12">
          <h3 className="font-semibold px-3 py-1 text-xl">Ranger listing</h3>
        </div>
          <div className="flex justify-between md:w-6/12">
          <span className="bg-green px-3 py-1 font-semibold cursor-pointer rounded-sm">Invite new</span
          >
        </div>
        </div>
        <table className="text-left w-full md:px-10">
          <thead className="w-full">
            <tr
              className="justify-between"
            >
              <th className="p-3 w-1/10"></th>
              <th className="p-3 w-1/6">Full name</th>
              <th className="p-3 w-1/6">Date joined</th>
              <th className="p-3 w-1/6">Residense</th>
              <th className="p-3 w-1/6">Group</th>
              <th className="p-3 w-1/6">Others</th>
            </tr>
          </thead>
          <tbody
          className="limitedTable overflow-y-auto"
        >
          {integers.map(int=>(
              <tr
                className="mt-3 justify-between bg-white border-b hover:border-green-400 cursor-pointer"
              >
                <td className="text-center p-3 w-1/10">{int}</td>
                <td className="p-3 w-1/6"
                  ><div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8">
                      <img
                        className="w-full h-full rounded-full"
                        src={photoUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">Mukera Aime</p>
                    </div>
                  </div></td
                >
                <td className="p-3 w-1/6">December 2017</td>
                <td className="p-3 w-1/6">Amahoro</td>
                <td className="p-3 w-1/6">Nkindira</td>
                <td className="p-3 w-1/6">Kwizigira</td>
              </tr>

          ))}
        </tbody>
        </table>
      </div>
    </div>
  </div>
    )
}