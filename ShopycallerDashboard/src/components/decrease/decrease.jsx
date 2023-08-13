import RedDownIcon from "../icons/redDownIcon";

function Decrease({color="bg-red-200 ",percentNumber}) {
    return (
        <div className={`${color} w-[63px] h-6 rounded-md text-red-600 flex flex-row`}>
                <RedDownIcon/>
                  <p className=" p-1 text-xs">{percentNumber}%</p>
                </div>
    )
}
export default Decrease ;