function RecipeCard({title, desc}){
    return(
        <div className="card w-[610px] h-[200px] bg-[#2f110d]  text-3xl font-medium rounded-3xl flex flex-col mt-6 p-4 ">
 
         <h1 className=" text-white px-6 py-2">{title}</h1>
         <p className=" text-white px-6 py-2 text-base">{desc}</p>
         <button className="bg-[#250905] text-white text-base rounded-md px-6 py-2  max-w-2l mt-auto self-end">View</button>
        </div>

        
    )
}

export default RecipeCard