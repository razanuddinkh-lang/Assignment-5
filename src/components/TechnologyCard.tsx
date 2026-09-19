import type { Technology } from "../types/technology";
import AddToStack from "./AddToStack";

interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
}

const TechnologyCard = ({
  technology,
  onAdd,
}: TechnologyCardProps) => {

  return (
    <div className="card border border-white/10 bg-slate-900 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50">

      {/* Icon */}
      <div className="flex h-36 items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950">

        <span className="text-7xl">
          {technology.icon}
        </span>

      </div>

      <div className="card-body">

        {/* Category */}
        <div>
          <span className="badge badge-outline border-cyan-400 text-cyan-400">
            {technology.category}
          </span>
        </div>

        {/* Name */}
        <h2 className="card-title mt-2 text-2xl">
          {technology.name}
        </h2>

        {/* Description */}
        <p className="min-h-[72px] text-sm leading-6 text-gray-400">
          {technology.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">

          <span className="text-yellow-400">
            {"★".repeat(
              Math.round(technology.rating)
            )}
          </span>

          <span className="text-sm text-gray-400">
            {technology.rating} ({technology.reviews})
          </span>

        </div>

        {/* Price */}
        <div className="mt-2 text-2xl font-bold">
          ${technology.price}
        </div>

        {/* Add button */}
        <div className="card-actions mt-4">

          <AddToStack
            technology={technology}
            onAdd={onAdd}
          />

        </div>

      </div>

    </div>
  );
};

export default TechnologyCard;