import {changeThemeId, IdType, themeReducer, ThemeReducerType} from './themeReducer'


let startState: ThemeReducerType

beforeEach(() => {
    startState = {
        themeId: 1
    }
})

test('SET_THEME_ID', () => {
    const newTheme: IdType = 3
    const endState: ThemeReducerType = themeReducer(startState, changeThemeId(newTheme))
    expect(endState.themeId).toBe(newTheme)
})