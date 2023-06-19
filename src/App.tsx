import { Card } from "./Card"
import { Column } from "./Column"

function App() {


  return (
    <>
      <div className="bg-[#3179ba] w-80 flex items-start flex-row h-screen p-5 w-full">
        <Column text="To Do">
          <Card text="Generate app scaffold" />
        </Column>
        <Column text="In Progress">
          <Card text="Learn Typescript" />
        </Column>
        <Column text="Done">
          <Card text="Begin to use static typing" />
        </Column></div>

    </>
  )
}

export default App
