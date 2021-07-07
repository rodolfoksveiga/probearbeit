// Import components, functions, types, variables, and styles
import {
    FETCH_MEETINGS_LOADING,
    FETCH_MEETINGS_SUCCESS,
    FETCH_MEETINGS_FAIL,
    TDispatchFetchMeetings
} from '../actions/fetchMeetings'
import {
    CREATE_MEETING_SUCCESS,
    CREATE_MEETING_FAIL,
    TDispatchCreateMeeting
} from '../actions/createMeeting'
import {
    UPDATE_MEETING_SUCCESS,
    UPDATE_MEETING_FAIL,
    TDispatchUpdateMeeting
} from '../actions/updateMeeting'
import {
    DELETE_MEETING_SUCCESS,
    DELETE_MEETING_FAIL,
    TDispatchDeleteMeeting
} from '../actions/deleteMeeting'
import { TMeetings } from '../components/meetings/MeetingsList'

// Types and interfaces
type TDispatchMeeting =
    | TDispatchFetchMeetings
    | TDispatchCreateMeeting
    | TDispatchUpdateMeeting
    | TDispatchDeleteMeeting

interface IMeetingsState {
    isLoading: boolean
    data: TMeetings | null
    message: string | null
}

// Global variables
const initialState = {
    isLoading: false,
    data: null,
    message: null
}

// Reducer
export function meetingsReducer(
    state: IMeetingsState = initialState,
    action: TDispatchMeeting
) {
    switch (action.type) {
        case FETCH_MEETINGS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_MEETINGS_SUCCESS:
            return {
                isLoading: false,
                data: action.payload,
                message: null
            }
        case FETCH_MEETINGS_FAIL:
            return {
                isLoading: false,
                data: null,
                message: action.payload
            }
        case CREATE_MEETING_SUCCESS:
            return {
                ...state,
                message: null
            }
        case CREATE_MEETING_FAIL:
            return {
                ...state,
                message: action.payload
            }
        case UPDATE_MEETING_SUCCESS:
            return {
                ...state,
                message: null
            }
        case UPDATE_MEETING_FAIL:
            return {
                ...state,
                message: action.payload
            }
        case DELETE_MEETING_SUCCESS:
            return {
                ...state,
                message: null
            }
        case DELETE_MEETING_FAIL:
            return {
                ...state,
                message: action.payload
            }
        default:
            return state
    }
}
