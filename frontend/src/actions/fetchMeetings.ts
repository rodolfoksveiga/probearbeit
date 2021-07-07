// Import components, functions, types, and variables
import axios from 'axios'
import { Dispatch } from 'redux'

import { TMeetings } from '../components/meetings/MeetingsList'

// Types and interfaces
interface IFetchMeetingsLoading {
    type: typeof FETCH_MEETINGS_LOADING
}

interface IFetchMeetingsSuccess {
    type: typeof FETCH_MEETINGS_SUCCESS
    payload: TMeetings
}

interface IFetchMeetingsFail {
    type: typeof FETCH_MEETINGS_FAIL
    payload: string
}

export type TDispatchFetchMeetings =
    | IFetchMeetingsLoading
    | IFetchMeetingsSuccess
    | IFetchMeetingsFail

// Action
const URL = 'http://localhost:8000/api/meetings/'
export const FETCH_MEETINGS_LOADING = 'FETCH_MEETINGS_LOADING'
export const FETCH_MEETINGS_SUCCESS = 'FETCH_MEETINGS_SUCCESS'
export const FETCH_MEETINGS_FAIL = 'FETCH_MEETINGS_FAIL'

export default function fetchMeetings() {
    return async (dispatch: Dispatch<TDispatchFetchMeetings>) => {
        try {
            dispatch({
                type: FETCH_MEETINGS_LOADING
            })

            const response = await axios.get(URL)

            dispatch({
                type: FETCH_MEETINGS_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: FETCH_MEETINGS_FAIL,
                payload: 'Error while loading the meetings. Reload the page.'
            })

            console.log(error)
        }
    }
}
