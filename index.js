const redux = require('redux');
const createStore =redux.createStore
const BUY_CAKE ='BUY_CAKE';

function Buycake(){
    return{
        type:BUY_CAKE,
        info:'FIRST BUT CAKE EVENT'
    }
}
//(previousState,action)=>newState
const initialState ={
    numOfCakes:10
}

const reducer =(state =initialState,action )=>
{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        default:return state
    }
}
const store =createStore(reducer)
console.log('initial state',store.getState())
const unsubscribe =store.subscribe(()=> console.log('update state',store.getState()))
store.dispatch(Buycake())
store.dispatch(Buycake())
store.dispatch(Buycake())

unsubscribe()
