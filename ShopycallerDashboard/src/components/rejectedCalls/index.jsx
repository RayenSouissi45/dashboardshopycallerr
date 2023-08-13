import RedShopIcon from "../icons/redShopIcon";

function RejectedCalls() {
    return (
        <div className="h-60 bg-white w-[340px] rounded-lg ml-6 pb-8 mt-4 mb-20 pt-8 ">
                <div className="flex flex-row pl-6">
                  <div className="col1 w-4 h-8 rounded-md" />
                  <b>
                    <h5 className="text-lg tracking-wider pl-2 ">Appels rejetés</h5>
                  </b>
                </div>
                <div className="flex flex-row">
                  <div className="w-12 h-12  rounded-full bg-red-100 flex items-center justify-center ml-6 border mt-8  ">
                    {/* shop icon */}
                    <RedShopIcon/>
                  </div>
                  <div className="w-72">
                    <p className="ml-6 mt-6 mr-4">
                      Vous avez <b>52 appels qui ont été </b>rejetés. Dont{" "}
                      <b>8 appels pour des clients qui existe déja.</b>
                    </p>
                  </div>
                </div>
                <button className="bg-white w-72  hover:bg-gray-50 ml-12 pl-20 mt-4 text-gray-800 font-bold py-2  mr-6 flex flex-row border rounded-xl ">
                  <h2>Voir les appels</h2>
                </button>
              </div>
    )
}
export default RejectedCalls ;