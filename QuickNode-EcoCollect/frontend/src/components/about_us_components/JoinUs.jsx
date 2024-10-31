const JoinUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center w-4/5 mx-auto font-sans">
      <h2 className="p-8 text-4xl md:text-5xl text-primary40 font-bold text-center">
        Join Us in Making a Difference!
      </h2>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 text-center mt-4">
        Together, we can transform the way we think about waste and create a
        more sustainable future. By participating in our platform, you
        contribute to the global effort to reduce plastic pollution while
        also benefiting from the rewards and opportunities offered by
        blockchain technology.
      </p>
      <input
        className="rounded-lg p-4 w-full max-w-md text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary40"
        type="email"
        placeholder="Enter your email"
      />
    </div>
  );
};

export default JoinUs;
