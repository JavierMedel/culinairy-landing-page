export function RecipeDetail({ recipe }: { recipe: Recipe }) {
  return (
    <div className="recipe-detail">
      <div className="recipe-header">
        <Image
          src={recipe.image_url}
          alt={recipe.title}
          width={1200}
          height={800}
          className="recipe-main-image"
        />
        <div className="recipe-header-info">
          <div className="tags">
            {recipe.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <h1>{recipe.title}</h1>
          <h2>{recipe.subtitle}</h2>
          <p className="cuisine">{recipe.cousine} Cuisine</p>
          <p className="description">{recipe.description}</p>
        </div>
      </div>

      <div className="recipe-meta">
        <div className="time-info">
          <span>Prep: {recipe.prep_time}</span>
          <span>Cook: {recipe.cooking_time}</span>
          <span>Total: {recipe.total_time}</span>
        </div>
        <div className="serving-info">
          <span>Servings: {recipe.servings}</span>
          <span>Difficulty: {recipe.difficulty}</span>
        </div>
      </div>

      <div className="recipe-content">
        <section className="ingredients-section">
          <h3>Ingredients</h3>
          <div className="ingredients-grid">
            {recipe.ingredients.map(ingredient => (
              <div key={ingredient.name} className="ingredient-card">
                <Image
                  src={ingredient.image_url}
                  alt={ingredient.name}
                  width={100}
                  height={100}
                />
                <h4>{ingredient.name}</h4>
                <p>{ingredient.quantity}</p>
                {ingredient.allergens.length > 0 && (
                  <div className="allergens">
                    <small>Contains: {ingredient.allergens.join(', ')}</small>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="not-included-section">
          <h3>You'll Need</h3>
          <div className="not-included-grid">
            {recipe.not_included_in_delivery.map(item => (
              <div key={item.name} className="not-included-item">
                <Image
                  src={item.image_url}
                  alt={item.name}
                  width={50}
                  height={50}
                />
                <span>{item.name}</span>
                <span>{item.quantity}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="cooking-steps">
          <h3>Instructions</h3>
          {recipe.cooking_steps.map(step => (
            <div key={step.step} className="step-card">
              <div className="step-number">Step {step.step}</div>
              <Image
                src={step.image_url}
                alt={`Step ${step.step}`}
                width={750}
                height={500}
              />
              <p>{step.description}</p>
            </div>
          ))}
        </section>

        <section className="nutrition-section">
          <h3>Nutrition Values (per serving)</h3>
          <div className="nutrition-grid">
            {Object.entries(recipe.nutrition_values.per_serving).map(([key, value]) => (
              <div key={key} className="nutrition-item">
                <span className="nutrition-label">{key.replace(/_/g, ' ')}</span>
                <span className="nutrition-value">{value}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}