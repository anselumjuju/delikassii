const Description = ({ description }: { description: string }) => {
  return (
    <div className='space-y-2'>
      <h1 className='text-xl lg:text-2xl font-semibold font-raleway'>Description</h1>
      <p className='text-sm md:text-base font-medium text-primary-500 leading-relaxed lg:text-balance'>{description}</p>
    </div>
  );
};

export default Description;
