import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import {
    createViewDay,
    viewWeek,
    createViewMonthAgenda,
    createViewMonthGrid,
    createViewWeek,
} from '@schedule-x/calendar'
import { createEventModalPlugin } from '@schedule-x/event-modal'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import '@schedule-x/theme-default/dist/index.css'
import CustomTimeGridEvent from "./CustomTimeGridEvent.tsx";
import CustomDateGridEvent from "./CustomDateGridEvent.tsx";

function EventCalenderView() {
    const calendar = useCalendarApp({
        locale: 'de-DE',
        selectedDate: '2024-09-07',
        defaultView: viewWeek.name,
        views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
        plugins: [createEventModalPlugin(), createDragAndDropPlugin()],
        events: [
            {
                id: '1',
                title: 'Event 1',
                start: '2024-09-07 10:00',
                end: '2024-09-07 10:30',
            },
        ],
    })

    return (
        <div style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <ScheduleXCalendar
                calendarApp={calendar}
                customComponents={{
                    timeGridEvent: CustomTimeGridEvent,
                    dateGridEvent: CustomDateGridEvent,
                }}
            />
        </div>
    )
}

export default EventCalenderView