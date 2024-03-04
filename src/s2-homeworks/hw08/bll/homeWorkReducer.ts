import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            if (action.payload === 'up') {
                return state.slice().sort((a, b) => a.name.localeCompare(b.name))
            }

            return state.slice().sort((a, b) => a.name.localeCompare(b.name)).reverse()
        }
        case 'check': {

            return state.filter(item => item.age >= 18)

        }
        default:
            return state
    }
}
