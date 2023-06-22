import { Counter, CounterRed, Form, User } from "./components";

export function App() {
    return (
        <div className="mt-5">
            <h1>React + TypeScript</h1>
            <h2>UseState</h2>
            <Counter />
            <User />
            <h2>UseReducer</h2>
            <CounterRed />
            <h3>Custom Hooks</h3>
            <Form />
        </div>
    );
}
