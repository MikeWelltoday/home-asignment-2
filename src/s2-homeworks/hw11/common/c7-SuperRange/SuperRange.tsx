import React from 'react'
import {Slider, SliderProps} from '@mui/material'


const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            value={props.value}
            onChange={props.onChange}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
