import { useDispatch, useSelector } from 'react-redux'
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store/calendar/calendarSlice';

export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state=> state.calendar)
        
    const setActiveEvent = (calendarEvent) =>{
        dispatch( onSetActiveEvent( calendarEvent) )
}
    const startSavingEvent = async(calendarEvent) => {
        // TODO: llegal al backend


        //Todo bien
        if(calendarEvent._id){
            //Actualizando 
            dispatch(onUpdateEvent({ ...calendarEvent }))
        }else {
            //Creando
            dispatch( onAddNewEvent({...calendarEvent, _id:new Date().getTime() }) );
        }
    }
    const startDeletingEvent = () => {
        //TODO : llegar al Backend
        dispatch( onDeleteEvent() )
    }

return {
        //Propiedades
        events,
        activeEvent,
        haseventSelected: !!activeEvent,

        //Métodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
    }
}
