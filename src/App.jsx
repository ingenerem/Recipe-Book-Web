import { Input } from "postcss"
import { Fragment } from "react/jsx-runtime"



function Header() {
  return (

    <header className="flex item-center mt-6 p-2">
      <img src="/logo.png" alt="recipes" className="w-22 h-20" />
      <h1 className="text-4xl font-bold text-white mt-4 mb-4">Recipe Book</h1>

    </header>
  )

}

function MainPage() {
  return (

    <div className="max-w-3xl mx-auto">

      <Header />
      <main className=" bg-stone-700 flex-col mt-10 p-8 rounded  max-h-screen">
        
        <div className="flex item-center px-10">

        </div>

        <div className="flex space-x-4 mt-6 pb-3">
          <input className="p-2 rounded-md bg-white border border-black  placeholder-orange-950 w-[500px]" placeholder="Search recipes..." />
          <button className="bg-[#250905] text-white rounded-md px-6 py-2">Search</button>
        </div>
        <button className="bg-[#2f110d] text-white text-3xl font-medium w-[610px] text-stone-300 rounded-xl h-20">+Add a recipe</button>
      </main>

    </div>
  

  )
}

export default MainPage


