
function setLogoText (state = {}, action) {
    switch (action.type) {
        case action.type === 'SET_LOGO_TEXT':
            return {
                textLineOne: action.logoText.textLineOne,
                textLineTwo: action.logoText.textLineTwo
            };

        default:
            return state;
    }
}

export default setLogoText;