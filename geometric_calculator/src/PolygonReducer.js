function reducer(state, { type, value }) {    //actions is object contains type and value
    switch (type) {
        //if number is invalid or empty input i.e., NaN so give error msg
        //in circle problem with 5 giving 34.0000002 something like this
        //limit answer till 2-3 decimal places and round off it
        case 'circle-radius':
            return {
                ...state,
                radi: parseFloat(value),
            }
        case 'circle-circum':
            return {
                ...state,
                answer: parseFloat(state.radi * 6.28),
                found: 'for Circumference',
            }
        case 'circle-area':
            return {
                ...state,
                answer: parseFloat(state.radi * state.radi * 3.14),
                found: 'for Area',
            }
        case 'tri-side1':
            return {
                ...state,
                triside1: parseFloat(value),
            }
        case 'tri-side2':
            return {
                ...state,
                triside2: parseFloat(value),
            }
        case 'tri-side3':
            return {
                ...state,
                triside3: parseFloat(value),
            }
        case 'tri-peri':
            return {
                ...state,
                answer: parseFloat(state.triside1 + state.triside2 + state.triside3),
                found: 'for Perimeter',
            }
        case 'tri-area':
            return {
                ...state,
                s : (state.triside1 + state.triside2 + state.triside3),
                answer: parseFloat(0.25 * (Math.sqrt((state.triside1 + state.triside2 + state.triside3) * ( state.triside2 + state.triside3 - state.triside1) * (state.triside1 - state.triside2 + state.triside3) * (state.triside1 + state.triside2 - state.triside3)))),
                found: 'for Area',
            }
        case 'square-length':
            return {
                ...state,
                sqlength: parseFloat(value),
            }
        case 'square-peri':
            return {
                ...state,
                answer: parseFloat(state.sqlength * 4),
                found: 'for Perimeter',
            }
        case 'square-area':
            return {
                ...state,
                answer: parseFloat(state.sqlength * state.sqlength),
                found: 'for Area',
            }
        case 'rect-length':
            return {
                ...state,
                reclength: parseFloat(value),
            }
        case 'rect-breadth':
            return {
                ...state,
                recbreadth: parseFloat(value),
            }
        case 'rect-peri':
            return {
                ...state,
                answer: parseFloat((state.reclength + state.recbreadth) * 2),
                found: 'for Perimeter',
            }
        case 'rect-area':
            return {
                ...state,
                answer: parseFloat(state.reclength * state.recbreadth),
                found: 'for Area',
            }
        case 'tra-paraside1':
            return {
                ...state,
                traparaside1: parseFloat(value),
            }
        case 'tra-paraside2':
            return {
                ...state,
                traparaside2: parseFloat(value),
            }
        case 'tra-side1':
            return {
                ...state,
                traside1: parseFloat(value),
            }
        case 'tra-side2':
            return {
                ...state,
                traside2: parseFloat(value),
            }
        case 'tra-height':
            return {
                ...state,
                traheight: parseFloat(value),
            }
        case 'tra-peri':
            return {
                ...state,
                answer: parseFloat(state.traparaside1 + state.traparaside2 + state.traside1 + state.traside2),
                found: 'for Perimeter',
            }
        case 'tra-area':
            return {
                ...state,
                answer: parseFloat(((state.traparaside1 + state.traparaside2) / 2) * state.traheight),
                found: 'for Area',
            }
        case 'rho-length':
            return {
                ...state,
                rholength: parseFloat(value),
            }
        case 'rho-diagonal1':
            return {
                ...state,
                rhodiagonal1: parseFloat(value),
            }
        case 'rho-diagonal2':
            return {
                ...state,
                rhodiagonal2: parseFloat(value),
            }
        case 'rho-peri':
            return {
                ...state,
                answer: parseFloat(state.rholength * 4),
                found: 'for Perimeter',
            }
        case 'rho-area':
            return {
                ...state,
                answer: parseFloat((state.rhodiagonal1 * state.rhodiagonal2) / 2),
                found: 'for Area',
            }
        case 'clear':
            return {
                ...state,
                radi: '',
                triside1: '',
                triside2: '',
                triside3: '',
                sqlength: '',
                reclength: '',
                recbreadth: '',
                traparaside1: '',
                traparaside2: '',
                traside1: '',
                traside2: '',
                traheight: '',
                rholength: '',
                rhodiagonal1: '',
                rhodiagonal2: '',
                answer: '',
                found: '',
            }
        default:
            return state
    }
}

export default reducer;