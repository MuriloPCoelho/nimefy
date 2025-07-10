interface CardProps {
  image: string;
  title: string;
  categories: [string, string, string];
  ageRating: string;
  year: number;
}

const Card = ({ image, title, categories, ageRating, year }: CardProps) => {
  return (
    <div className="aspect-video bg-neutral-800 min-w-1/3 md:min-w-1/4 lg:min-w-1/5 xl:min-w-1/6 rounded"></div>
  );
};

export default Card;
