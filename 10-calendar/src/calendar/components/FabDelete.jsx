import { useCalendarStore, useUiStore } from "../../hooks"

export const FabDelete = () => {

    const { startDeletingEvent, haseventSelected } = useCalendarStore();
    const handleDelete = () => {
      startDeletingEvent();
    }

  return (
    <button
        onClick={ handleDelete }
        style={{
          display: haseventSelected ? '' : 'none'
        }}
        className="btn btn-danger fab-danger">
            <i className="fas fa-trash-alt "></i>
    </button>
  )
}
