import type { StackItem } from "../types/technology";

interface YourStackProps {
  stack: StackItem[];
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  stack,
  onIncrease,
  onDecrease,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {

  const total = stack.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const totalItems = stack.reduce(
    (sum, item) =>
      sum + item.quantity,
    0
  );

  return (
    <aside className="sticky top-24 rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-2xl">

      {/* Header */}
      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Your Stack
        </h2>

        <span className="rounded-full bg-pink-500 px-3 py-1 text-sm">
          {totalItems}
        </span>

      </div>


      {/* Empty */}
      {stack.length === 0 ? (

        <div className="py-12 text-center">

          <div className="text-5xl">
            🛒
          </div>

          <p className="mt-4 text-gray-400">
            Your stack is empty
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Add a technology to your stack.
          </p>

        </div>

      ) : (

        <>

          {/* Items */}
          <div className="mt-6 max-h-[450px] space-y-4 overflow-y-auto">

            {stack.map((item) => (

              <div
                key={item.id}
                className="rounded-xl bg-slate-800 p-4"
              >

                <div className="flex items-center gap-3">

                  {/* Icon */}
                  <div className="text-3xl">
                    {item.icon}
                  </div>

                  {/* Information */}
                  <div className="min-w-0 flex-1">

                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-400">
                      ${item.price} × {item.quantity}
                    </p>


                    {/* Quantity */}
                    <div className="mt-2 flex items-center gap-2">

                      {/* Cut / decrease */}
                      <button
                        onClick={() =>
                          onDecrease(item.id)
                        }
                        className="btn btn-xs btn-circle bg-slate-700 text-white hover:bg-pink-500"
                      >
                        −
                      </button>

                      <span className="min-w-5 text-center">
                        {item.quantity}
                      </span>

                      {/* Add */}
                      <button
                        onClick={() =>
                          onIncrease(item.id)
                        }
                        className="btn btn-xs btn-circle bg-slate-700 text-white hover:bg-green-500"
                      >
                        +
                      </button>

                    </div>

                  </div>


                  {/* Remove */}
                  <button
                    onClick={() =>
                      onRemove(item.id)
                    }
                    className="text-xl text-red-400 transition hover:text-red-300"
                  >
                    ×
                  </button>

                </div>

              </div>

            ))}

          </div>


          {/* Total */}
          <div className="mt-6 border-t border-white/10 pt-5">

            <div className="flex justify-between">

              <span className="text-gray-400">
                Total
              </span>

              <span className="text-xl font-bold text-cyan-400">
                ${total.toFixed(2)}
              </span>

            </div>

          </div>


          {/* Remove All */}
          <button
            onClick={onRemoveAll}
            className="btn btn-outline btn-error mt-5 w-full"
          >
            Remove All
          </button>

        </>

      )}

    </aside>
  );
};

export default YourStack;