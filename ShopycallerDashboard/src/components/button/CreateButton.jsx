function CreateButton ({text}) {
    return (
        <button className="flex items-center px-4 py-2 text-white  rounded-xl bg-green-400 w-32 justify-center">
        <b>
          <h1>{text}</h1>
        </b>
      </button>
    )
}
export default CreateButton ;