// Import components, functions, types, and variables
import axios from 'axios'
import { Dispatch } from 'redux'

import { IMeeting } from '../components/meetings/MeetingsList'
import { IMeetingForm } from '../components/meetings/MeetingCreate'

// Types and interfaces
interface ICreateMeetingSuccess {
    type: typeof CREATE_MEETING_SUCCESS
    payload: IMeeting
}

interface ICreateMeetingFail {
    type: typeof CREATE_MEETING_FAIL
    payload: string
}

export type TDispatchCreateMeeting = ICreateMeetingSuccess | ICreateMeetingFail

// Action
const URL = 'http://localhost:8000/api/meetings/'
export const CREATE_MEETING_SUCCESS = 'CREATE_MEETING_SUCESS'
export const CREATE_MEETING_FAIL = 'CREATE_MEETING_FAIL'

export default function createMeeting(form: IMeetingForm) {
    return async (dispatch: Dispatch<TDispatchCreateMeeting>) => {
        try {
            const response = await axios.post(URL, form)

            dispatch({
                type: CREATE_MEETING_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: CREATE_MEETING_FAIL,
                payload:
                    'Error while creating the meeting. Check the input fields.'
            })

            console.log(error)
        }
    }
}
