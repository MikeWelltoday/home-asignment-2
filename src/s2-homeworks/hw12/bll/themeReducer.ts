export type IdType = number

type ChangeThemeIdActionType = {
    type: 'SET_THEME_ID'
    id: IdType
}

export type ThemeReducerType = {
    themeId: IdType
}


const initState: ThemeReducerType = {
    themeId: 1
}

export const themeReducer = (state: ThemeReducerType = initState, action: ChangeThemeIdActionType): ThemeReducerType => { // fix any
    switch (action.type) {

        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }

        default:
            return state
    }
}


export const changeThemeId = (id: IdType): ChangeThemeIdActionType => ({type: 'SET_THEME_ID', id}) as const
