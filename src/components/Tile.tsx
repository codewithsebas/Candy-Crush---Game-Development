import { dragDrop, dragEnd, dragStart } from "../store";
import { useAppDispatch } from "../store/hooks";

function Tile({ candy, candyId }: { candy: string; candyId: number }) {
    const dispatch = useAppDispatch();
  return (
    <div
      className="h-20 w-20 flex justify-center items-center m-1 rounded-lg select-none border"
      style={{
        cursor: "pointer",
        boxShadow:
          "inset 5px 5px 15px rgba(255,255,255, 0.3), inset -5px -5px 15px rgba(255,255,255, 0.3)",
      }}
    >
      {candy && (
        <img
          src={candy}
          alt="Candy"
          className="h-16 w-16"
          draggable={true}
          onDragStart={(e) => dispatch(dragStart(e.target))}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={(e) => e.preventDefault()}
          onDragLeave={(e) => e.preventDefault()}
          onDrop={(e) => dispatch(dragDrop(e.target))}
          onDragEnd={() => dispatch(dragEnd())}
          candy-id={candyId}
        />
      )}
    </div>
  );
}

export default Tile;
