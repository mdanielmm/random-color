import initialState from '../initialState';

const generateRandomColor = () => {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor
} 

const generateRandomFont = () => {
    const fonts = {1: 'Arial', 2: 'Verdana', 3: 'Courier New', 4: 'Lucida Console', 5: 'Tahoma'}
    return fonts[Math.floor(Math.random() * 5) + 1]  
}

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case 'BACKGROUND_COLOR': 
            return {
                ...state, 
                backgroundColor: generateRandomColor()
            }
        case 'FONT_COLOR': 
            return {
                ...state, 
                fontColor: generateRandomColor()
            }
        case 'FONT': 
            return {
                ...state,
                font: generateRandomFont()
            }
        default: 
            return state //warning
    }
};

export default reducer;

