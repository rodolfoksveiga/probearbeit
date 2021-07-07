// Import components, functions, types, and variables
import { Button, ButtonGroup, Card } from 'react-bootstrap'
import DeleteMeeting from './DeleteMeeting'

// Types and interfaces
interface IMeetingCardProps {
    meetingId: number
    dateTime: string
    local: string
    mode: number
    team1: string[]
    team2: string[]
    handleTriggerReload: Function
}

// Component
export default function MeetingCard({
    meetingId,
    dateTime,
    local,
    mode,
    team1,
    team2,
    handleTriggerReload
}: IMeetingCardProps) {
    return (
        <Card className="m-2 m-md-3 shadow" style={{ width: '18rem' }}>
            <Card.Header className="text-center">
                Meeting #{meetingId}, in {local}
            </Card.Header>
            <Card.Body className="text-center">
                <Card.Title className="font-weight-bold" as="h2">
                    {team1} x {team2}
                </Card.Title>
                <Card.Subtitle className="py-2">
                    Best of <b>{mode}</b>
                </Card.Subtitle>
                <Card.Text className="font-italic text-muted">
                    {dateTime}
                </Card.Text>
                <ButtonGroup>
                    <Button href={'/'}>Edit</Button>
                    <DeleteMeeting
                        id={meetingId}
                        handleTriggerReload={handleTriggerReload}
                    />
                </ButtonGroup>
            </Card.Body>
        </Card>
    )
}
