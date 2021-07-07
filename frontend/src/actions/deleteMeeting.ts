// Import components, functions, types, and variables
import axios from 'axios'
import { Dispatch } from 'redux'

// Types and interfaces
interface IDeleteMeetingSuccess {
    type: typeof DELETE_MEETING_SUCCESS
}

interface IDeleteMeetingFail {
    type: typeof DELETE_MEETING_FAIL
    payload: string
}

export type TDispatchDeleteMeeting = IDeleteMeetingSuccess | IDeleteMeetingFail

// Action
const URL = 'http://localhost:8000/api/meetings/'
export const DELETE_MEETING_SUCCESS = 'DELETE_MEETING_SUCESS'
export const DELETE_MEETING_FAIL = 'DELETE_MEETING_FAIL'

export default function deleteMeeting(id: string) {
    return async (dispatch: Dispatch<TDispatchDeleteMeeting>) => {
        try {
            await axios.delete(URL + id + '/')

            dispatch({
                type: DELETE_MEETING_SUCCESS
            })
        } catch (error) {
            dispatch({
                type: DELETE_MEETING_FAIL,
                payload: 'Error while deleting the meeting. Try again.'
            })

            console.log(error)
        }
    }
}
