export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="recipe-card">
      {recipe.image_url && (
        <Image
          src={recipe.image_url}
          alt={recipe.title}
          width={300}
          height={200}
        />
      )}
      <div className="recipe-info">
        <h2>{recipe.title}</h2>
        <h3>{recipe.subtitle}</h3>
        <p>{recipe.description}</p>
        <div className="recipe-meta">
          <span>Prep: {recipe.prep_time}</span>
          <span>Cook: {recipe.cooking_time}</span>
          <span>Calories: {recipe.calories_per_serving}</span>
          <span>Difficulty: {recipe.difficulty}</span>
        </div>
      </div>
    </div>
  )
}