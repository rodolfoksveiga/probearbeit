// Import components, functions, types, and variables
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import deleteMeeting from '../../actions/deleteMeeting'

// Types and interfaces
interface IDeleteMeetingProps {
    id: number
    deleteMeeting: Function
    handleTriggerReload: Function
}

// Component
export function DeleteMeeting({
    id,
    deleteMeeting,
    handleTriggerReload
}: IDeleteMeetingProps) {
    function handleDelete() {
        deleteMeeting(id)
        handleTriggerReload()
    }

    return (
        <Button variant="danger" onClick={handleDelete}>
            Delete
        </Button>
    )
}

// Redux
export default connect(null, { deleteMeeting })(DeleteMeeting)
