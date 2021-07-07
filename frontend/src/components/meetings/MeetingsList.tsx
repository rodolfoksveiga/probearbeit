// Import components, functions, types, and variables
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import fetchMeetings from '../../actions/fetchMeetings'
import { TRootState } from '../../reducers/rootReducer'
import MeetingCard from './MeetingCard'
import { Button, Container } from 'react-bootstrap'

// Types and interfaces
export interface IMeeting {
    id: number
    date_time: string
    local: string
    mode: number
    team1: string[]
    team2: string[]
}

export type TMeetings = IMeeting[]

interface IMeetingsListProps {
    meetings: null | TMeetings
    message: null | string
    fetchMeetings: Function
}

// Component
export function MeetingsList({
    meetings,
    message,
    fetchMeetings
}: IMeetingsListProps) {
    const [triggerReload, setTriggerReload] = useState<boolean>(false)

    useEffect(() => {
        fetchMeetings()
        setTriggerReload(false)
    }, [fetchMeetings, triggerReload])

    function handleTriggerReload() {
        setTriggerReload(!triggerReload)
    }

    return (
        <Container fluid="md" className="d-flex flex-column align-items-center">
            <h1 className="display-3">Blog Meetings</h1>
            <Button variant="success" href="/meetings/create/">
                Create new meeting
            </Button>
            {message ? (
                <p className="display-4">{message}</p>
            ) : (
                <Container className="d-flex flex-wrap justify-content-center align-items-center">
                    {meetings &&
                        meetings.map((meeting) => {
                            return (
                                <MeetingCard
                                    key={meeting.id}
                                    meetingId={meeting.id}
                                    dateTime={meeting.date_time}
                                    local={meeting.local}
                                    mode={meeting.mode}
                                    team1={meeting.team1}
                                    team2={meeting.team2}
                                    handleTriggerReload={handleTriggerReload}
                                />
                            )
                        })}
                </Container>
            )}
        </Container>
    )
}

// Redux
const mapStateToProps = (state: TRootState) => ({
    meetings: state.meetings.data,
    message: state.meetings.message
})

export default connect(mapStateToProps, { fetchMeetings })(MeetingsList)
