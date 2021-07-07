// Import components, functions, types, variables, and styles
import axios from 'axios'
import { Dispatch } from 'redux'

import { IMeetingForm } from '../components/meetings/MeetingCreate'

// Types and interfaces
interface IUpdateMeetingSuccess {
    type: typeof UPDATE_MEETING_SUCCESS
}

interface IUpdateMeetingFail {
    type: typeof UPDATE_MEETING_FAIL
    payload: string
}

export type TDispatchUpdateMeeting = IUpdateMeetingSuccess | IUpdateMeetingFail

// Action
const URL = 'http://localhost:8000/api/meetings/'
export const UPDATE_MEETING_SUCCESS = 'UPDATE_MEETING_SUCESS'
export const UPDATE_MEETING_FAIL = 'UPDATE_MEETING_FAIL'

export default function updateMeeting(form: IMeetingForm) {
    return async (dispatch: Dispatch<TDispatchUpdateMeeting>) => {
        try {
            await axios.put(URL, form)

            dispatch({
                type: UPDATE_MEETING_SUCCESS
            })
        } catch (error) {
            dispatch({
                type: UPDATE_MEETING_FAIL,
                payload:
                    'Error while updating the data. Check the input fields.'
            })

            console.log(error)
        }
    }
}
