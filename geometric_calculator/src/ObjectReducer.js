function reducer(state, { type, value }) {    //actions is object contains type and value
    switch (type) {
        //if number is invalid or empty input i.e., NaN so give error msg
        //in sphere problem with 5 giving 34.0000002 something like this
        //limit answer till 2-3 decimal places and round off it
        case 'sphere-radius':
            return {
                ...state,
                sphereradius: parseFloat(value),
            }
        case 'sphere-surfarea':
            return {
                ...state,
                answer: parseFloat(state.sphereradius * state.sphereradius * 12.56),
                found: 'for Surface Area',
            }
        case 'sphere-volume':
            return {
                ...state,
                answer: parseFloat(state.sphereradius * state.sphereradius * state.sphereradius * (4 / 3) * 3.14),
                found: 'for Volume',
            }
        case 'cone-radius':
            return {
                ...state,
                coneradius: parseFloat(value),
            }
        case 'cone-height':
            return {
                ...state,
                coneheight: parseFloat(value),
            }
        case 'cone-surfarea':
            return {
                ...state,
                answer: parseFloat(3.14 * state.coneradius * ( state.coneradius + Math.sqrt( (state.coneradius * state.coneradius) + (state.coneheight * state.coneheight)))),
                found: 'for Surface Area',
            }
        case 'cone-volume':
            return {
                ...state,
                answer: parseFloat((1 / 3) * 3.14 * state.coneradius * state.coneradius * state.coneheight),
                found: 'for Volume',
            }
        case 'cube-length':
            return {
                ...state,
                cubelength: parseFloat(value),
            }
        case 'cube-surfarea':
            return {
                ...state,
                answer: parseFloat(state.cubelength * 6 * state.cubelength),
                found: 'for Surface Area',
            }
        case 'cube-volume':
            return {
                ...state,
                answer: parseFloat(state.cubelength * state.cubelength * state.cubelength),
                found: 'for Volume',
            }
        case 'cuboid-length':
            return {
                ...state,
                cuboidlength: parseFloat(value),
            }
        case 'cuboid-breadth':
            return {
                ...state,
                cuboidbreadth: parseFloat(value),
            }
        case 'cuboid-height':
            return {
                ...state,
                cuboidheight: parseFloat(value),
            }
        case 'cuboid-surfarea':
            return {
                ...state,
                answer: parseFloat(((state.cuboidlength * state.cuboidheight) + (state.cuboidheight * state.cuboidbreadth) + (state.cuboidlength * state.cuboidbreadth)) * 2),
                found: 'for Surface Area',
            }
        case 'cuboid-volume':
            return {
                ...state,
                answer: parseFloat(state.cuboidlength * state.cuboidbreadth * state.cuboidheight),
                found: 'for Volume',
            }
        case 'cylinder-radius':
            return {
                ...state,
                cylinderradius: parseFloat(value),
            }
        case 'cylinder-height':
            return {
                ...state,
                cylinderheight: parseFloat(value),
            }
        case 'cylinder-surfarea':
            return {
                ...state,
                answer: parseFloat(6.28 * state.cylinderradius * (state.cylinderheight + state.cylinderradius)),
                found: 'for Surface Area',
            }
        case 'cylinder-volume':
            return {
                ...state,
                answer: parseFloat(3.14 * state.cylinderradius * state.cylinderradius * state.cylinderheight),
                found: 'for Volume',
            }
        case 'clear':
            return {
                ...state,
                sphereradius: '',
                coneheight: '',
                coneradius: '',
                cubelength: '',
                cuboidlength: '',
                cuboidbreadth: '',
                cuboidheight: '',
                cylinderradius: '',
                cylinderheight: '',
                answer: '',
                found: '',
            }
        default:
            return state
    }
}

export default reducer;