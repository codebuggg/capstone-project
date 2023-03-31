
const Thumbnail = ({ movie }) => {
  return (
    <div
      className="relative h-28 max-w-[180px] cursor-pointer transition-transform duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
    >
      <img
        src={movie.image}
        layout="fill"
        className="rounded-sm object-cover md:rounded"
        alt={movie.name}
      />
    </div>
  );
};

export default Thumbnail;