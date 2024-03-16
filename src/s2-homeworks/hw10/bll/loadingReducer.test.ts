import {loadingAC, loadingReducer, StateType} from './loadingReducer'


let startState: StateType

beforeEach(() => {
    startState = {
        isLoading: false
    }
})

test('CHANGE_LOADING', () => {

    const newValue = true

    const endState = loadingReducer(startState, loadingAC(newValue))

    expect(endState.isLoading).toBe(newValue)

})