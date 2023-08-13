function SimpleButton ({text,children, width="w-[160px]"}) {
    return (
      <button className={`bg-white hover:bg-gray-50 text-gray-500 font-bold ${width} p-2 flex flex-row border rounded-xl  `}>
      <p>{text}</p>
      <div className="">
      {children}
      </div>
    </button>
    )
}
export default SimpleButton