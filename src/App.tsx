import SQLViewer from "./components/sql-viewer";

import styles from "./App.module.css";

function App() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Welcome to SQL Handbook</h1>
			<SQLViewer />
		</div>
	);
}

export default App;
