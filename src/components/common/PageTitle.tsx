const PageTitle = ({image, title, description}) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat overflow-hidden pt-32 pb-32"
      style={{backgroundImage: `url('${image}');`}}
    >
      <div className="absolute inset-0 bg-[#1c1c1c] opacity-80"></div>
      <div className="container mx-auto max-w-7xl px-4 z-10">
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <h1 className="text-5xl text-white opacity-70 mb-2 z-50 font-henny">{title}</h1>
            <h2 className="text-white opacity-90 leading-tight sm:leading-snug tracking-[-1px]" >
              {description}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
