// Import components, functions, types, and variables
import { Card } from 'react-bootstrap'

// Types and interfaces
interface IMeetingCardProps {
    dateTime: string
    local: string
    mode: number
    team1: string[]
    team2: string[]
}

// Component
export default function MeetingCard({
    dateTime,
    local,
    mode,
    team1,
    team2
}: IMeetingCardProps) {
    return (
        <Card className="m-2 m-md-3 shadow" style={{ width: '18rem' }}>
            <Card.Header className="text-center">
                {local} - {mode}
            </Card.Header>
            <Card.Body className="text-center">
                <Card.Title className="font-weight-bold" as="h2">
                    {team1} x {team2}
                </Card.Title>
                <Card.Text className="font-italic text-muted">
                    {dateTime}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
