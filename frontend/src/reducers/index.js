import { combineReducers } from "redux";

const initialState = {
    frutas: [ ]
}

function frutasReducer(state = initialState, action){
    switch(action.type){
        case "ADICIONAR":
            return { frutas: [...state.frutas, {...action.value}] };
        case "REMOVER":
            state.frutas.splice(action.value,1)
            return {frutas: [...state.frutas] };
        default:
            return state;
    }
}

function tituloReducer(state= {titulo: "FEIRA"}, action){
    switch(action.type){
        case "ALTERAR":
            return {titulo: action.value};
        default:
            return state;
    }
}

const reducers = combineReducers({frutasReducer, tituloReducer});

export default reducers;