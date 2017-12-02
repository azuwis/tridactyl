import state from '../state'
import {MsgSafeKeyboardEvent} from '../msgsafe'

export function init() {
    state.mode = 'input'
}

export function parser(keys: MsgSafeKeyboardEvent[]) {
    const key = keys[0].key

    if (key === 'Escape') {
        state.mode = 'normal'
        return { keys: [], ex_str: 'unfocus' }
    } else if (key === 'Tab') {
        return { keys: [], ex_str: 'focusinput -n' }
    }
    return { keys: [], ex_str: '' }
}
