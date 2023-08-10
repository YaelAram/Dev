import { Toaster } from "sonner";
import "./App.css";
import { CreateUser, Users } from "./components";

function App() {
	return (
		<>
			<Users />
			<CreateUser />
			<Toaster richColors />
		</>
	);
}

export default App;
