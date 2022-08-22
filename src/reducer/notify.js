import * as notifies from '../constants/notify'
import {CHANGE_NOTIFY} from '../constants/actionType'
const initialState = notifies.NOTI_READY_BUY;
const notify = (state=initialState, action)=>{
    switch (action.type) {
        case CHANGE_NOTIFY:
            return action.content;
        default:
            return state;
    }
}
export default notify;