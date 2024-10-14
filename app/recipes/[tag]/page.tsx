const Page = ({ params }: { params: { tag: string } }) => {
  return (
    <div>
      <h1>Searching for tag - {params.tag}</h1>
    </div>
  );
};

export default Page;
