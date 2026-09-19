import type { Technology } from "../types/technology";

interface AddToStackProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
}

const AddToStack = ({
  technology,
  onAdd,
}: AddToStackProps) => {

  return (
    <button
      onClick={() => onAdd(technology)}
      className="btn w-full border-none bg-pink-500 text-white transition duration-300 hover:bg-green-500"
    >
      Add to Stack
    </button>
  );
};

export default AddToStack;