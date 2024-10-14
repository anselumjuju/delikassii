interface IngredientProps {
  ingredients: {
    components: {
      extra_comment: string;
      ingredient: {
        name: string;
      };
      measurements: {
        quantity: string;
        unit: {
          abbreviation: string;
          name: string;
        };
      }[];
      raw_text: string;
      position: number;
    }[];
    name: string;
    position: number;
  }[];
}

const Ingredients = ({ ingredients }: IngredientProps) => {
  return (
    <div className='w-full space-y-3 lg:space-y-5'>
      <h1 className='text-2xl font-semibold font-raleway hidden lg:block'>Ingredients</h1>

      <div className='w-full hidden lg:block space-y-2'>
        <div className='flex items-center justify-between'>
          <p>Ingredient</p>
          <p>Quantity</p>
        </div>
        <div className='w-full h-[1px] bg-primary-500' />
      </div>

      <div className='w-[90%] lg:w-full mx-auto'>
        <ul className='list-none grid grid-cols-2 lg:grid-cols-1 gap-y-2 md:gap-y-3'>
          {ingredients.map((ingredient) =>
            ingredient.components.map((component, idx) => (
              <>
                <li
                  key={idx}
                  className='w-max lg:hidden flex items-center justify-start gap-2 text-sm md:text-base font-normal text-primary-900 
              relative after:contents-[""] after:w-[6px] after:aspect-square after:rounded-full after:bg-accent-900 after:absolute after:top-1/2 after:-left-3 md:after:-left-4 after:-translate-y-1/2'>
                  {component.measurements[0].quantity} {` `}
                  {component.measurements[0].unit.abbreviation || component.measurements[0].unit.name} {` `}
                  {component.ingredient.name}
                </li>
                <li className='w-full hidden lg:flex items-center justify-between' key={idx + ingredient.components.length}>
                  <p className='text-base font-medium capitalize'>{component.ingredient.name}</p>
                  <p className='text-base'>
                    {component.measurements[0].quantity} {` `} {component.measurements[0].unit.abbreviation || component.measurements[0].unit.name}
                  </p>
                </li>
              </>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Ingredients;
