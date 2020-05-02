    import React, {useReducer} from 'react';
    import logo from './logo.svg';
    import './App.css';
    import HookCounter from "./component/use_state/HookCounter";
    import HookCounterTwo from "./component/use_state_hook_with_prev_state/HookCounterTwo";
    import HookCounterThree from "./component/use_state_hook_with_object/HookCounterThree";
    import HookCounterFour from "./component/use_state_with_array/HookCounterFour";
    import HookCounterEffect from "./component/use_effect_after_render/HookCounterEffect";
    import HookCounterConditional from "./component/use_effect_conditional_run/HookCounterConditional";
    import MouseMove from "./component/use_effect_only_once/MouseMove";
    import MouseContainer from "./component/use_effect_cleanup/MouseContainer";
    import IntervalHookCounter from "./component/use_effect_with_incorrect_dependence/IntervalHookCounter";
    import DataFetching from "./component/use_effect_fetch_data/DataFetching";
    import ComponentE from "./component/use_context_hook/ComponentE";
    import CounterOne from "./component/use_reducer_with_simple_state_action/CounterOne";
    import CounterTwo from "./component/use_redcer_with_complex_state_action/CounterTwo";
    import CounterThree from "./component/multiple_use_reducer/CounterThree";
    import ComponentA from "./component/use_reducer_with_use_context/ComponentA";
    import ComponentB from "./component/use_reducer_with_use_context/ComponentB";
    import ComponentC from "./component/use_reducer_with_use_context/ComponentC";
    import DataFetchingOne from "./component/use_reducer_and_fetch_data/DataFetchingOne";
    import DataFetchingTwo from "./component/use_reducer_and_fetch_data/DataFetchingTwo";
    import ParentComponent from "./component/use_callback_hook/ParentComponent";
    import Counter from "./component/use_memo_hook/Counter";
    import FocusInput from "./component/use_ref_hook/FocusInput";
    import HookTimer from "./component/use_ref_hook/HookTimer";
    import DocTitleOne from "./component/customHook/useDocumentTitleCustomHook/DocTitleOne";
    import DocTitleTwo from "./component/customHook/useDocumentTitleCustomHook/DocTitleTwo";
    export const UserContext = React.createContext();
    export const ChannelContext = React.createContext();
    export const CounterContext = React.createContext();
    // const initialState = 0;
    // const reducer = (state, action) => {
    //     switch (action) {
    //         case 'increment':
    //             return state + 1;
    //         case 'decrement':
    //             return state - 1;
    //         case 'reset':
    //             return initialState;
    //         default:
    //             return state;
    //
    //     }
    // }

    function App() {
        // const [count, dispatch] = useReducer(reducer, initialState);
        return (
            <div className="App">
                    {/*  lesson 01*/}
                    {/*<HookCounter/>*/}
                    {/*lesson 02*/}
                    {/*<HookCounterTwo/>*/}
                    {/*lesson 03*/}
                    {/*<HookCounterThree/>*/}
                    {/*lesson 04*/}
                    {/*<HookCounterFour/>*/}
                    {/*Lesson 05*/}
                    {/*<HookCounterEffect/>*/}
                    {/*lesson 06*/}
                    {/*<HookCounterConditional/>*/}
                    {/*lesson 07*/}
                    {/*<MouseMove/>*/}
                    {/*lesson 08*/}
                    {/*<MouseContainer/>*/}
                    {/*lesson09*/}
                    {/*<IntervalHookCounter/>*/}
                    {/*lesson10*/}
                    {/*<DataFetching/>*/}
                    {/*lesson11*/}
                    {/*<UserContext.Provider value={'maruf'}>*/}
                    {/*    <ChannelContext.Provider value={'playlist'} >*/}
                    {/*        <ComponentE/>*/}
                    {/*    </ChannelContext.Provider>*/}
                    {/*</UserContext.Provider>*/}
                    {/*lesson12 */}
                    {/*<CounterOne/>*/}
                    {/*lesson13*/}
                    {/*<CounterTwo/>*/}
                    {/*lesson14*/}
                    {/*<CounterThree/>*/}
                    {/*lesson15*/}

                    {/*<CounterContext.Provider value={{countState: count, countDispatch: dispatch}}>*/}
                    {/*    count- {count}*/}
                    {/*    <ComponentA/>*/}
                    {/*    <ComponentB/>*/}
                    {/*    <ComponentC/>*/}
                    {/*</CounterContext.Provider>*/}
                    {/*lesson-16*/}
                    {/*<DataFetchingOne/>*/}
                    {/*<DataFetchingTwo/>*/}
                    {/*lesson 17   */}
                    {/*<ParentComponent/>*/}
                    {/*lesson 18*/}
                    {/*<Counter/>*/}
                    {/*lesson19*/}
                    {/*<FocusInput/>*/}
                    {/*<HookTimer/>*/}
                    {/*lesson20*/}
                    <DocTitleOne/>
                    <DocTitleTwo/>
                </div>

        );
    }

    export default App;
