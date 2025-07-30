function RecipeForm() {
  const ingredients = [];
  const instructions = [];

  return (
    <form className="recipe">
      <div className="desc">
        <input placeholder="Add ingredients" />
      </div>
      <div className="steps">
        <input placeholder="Add instructions" />
      </div>
    </form>
  );
}

export default RecipeForm;