interface InstructionProps {
  instructions: {
    display_text: string;
    position: number;
  }[];
}

const Instructions = ({ instructions }: InstructionProps) => {
  return (
    <div className='w-full space-y-3'>
      <h1 className='text-2xl font-semibold font-raleway hidden lg:block'>Instructions</h1>
      <div className='w-[95%] mx-auto space-y-5'>
        {instructions.map((instruction) => (
          <div key={instruction.position} className='flex items-baseline gap-5'>
            <p className='text-sm md:text-base font-bold font-dancingScript relative after:contents-[""] after:w-[25px] after:aspect-square after:rounded-full after:border-[1.5px] after:border-accent-900 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2'>
              {instruction.position}
            </p>
            <p className='text-sm md:text-base font-normal leading-relaxed'>{instruction.display_text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructions;
