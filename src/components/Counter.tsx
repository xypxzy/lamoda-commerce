import {useAppDispatch, useAppSelector} from "../store/hooks.ts";
import {increment} from "../store/counter/counterSlice.ts";


export function Counter() {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    return (
        <div>
            {count}
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    )

}