import { Input } from "postcss"
import { Fragment } from "react/jsx-runtime"
import RecipeList from "./components/RecipeList"
import RecipeCard from "./components/RecipeCard"



function Header() {
  return (

    <header className="flex items-center mt-6 p-2 space-y-4 ">
      <img src="/logo.png" alt="recipes" className="w-22 h-20" />
      <h1 className="text-5xl font-bold text-white mb-4">Recipe Book</h1>
   

    </header>
  )

}

function Footer() {
  return (
    <footer className="item-center mx-auto text-black">
      Coppyright © 2025 Marie@pitech
    </footer>
  )


}

function MainPage() {
  return (
    <>
      <div className="flex flex-col max-w-3xl mx-auto max-h-screen min-h-screen ">

        <Header />

        <div className="flex space-x-4 pb-3 items-center">
          <input className="p-2 rounded-md bg-white border border-black  placeholder-orange-950 w-[500px] h-10" placeholder="Search recipes..." />
          <button className="bg-[#250905] text-white rounded-2xl px-6 h-12">Search</button>
       
        <button className="bg-[#2f110d] text-white text-3xl font-medium w-[610px] text-stone-300 rounded-3xl h-20">+Add a recipe</button>
         </div>
        <main className=" bg-stone-700 p-8 rounded flex-grow overflow-auto hide-scroll">



          <div className="rec-cards ">
            <RecipeCard title="Chocolate Cake" desc="Rich and moist dessert" />
            <RecipeCard title="Chocolate Cake" desc="Rich and moist dessert" />
            <RecipeCard title="Chocolate Cake" desc="Rich and moist dessert" />
          </div>

        </main>

        <Footer />

      </div>

    </>

  )
}

export default MainPage


