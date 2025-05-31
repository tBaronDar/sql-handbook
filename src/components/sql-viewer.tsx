import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import sqlLecture1 from "../assets/notes/sql_01.sql.txt?raw";
import sqlLecture2 from "../assets/notes/sql_02.sql.txt?raw";
import sqlLecture3 from "../assets/notes/sql_03.sql.txt?raw";
import sqlLecture4 from "../assets/notes/sql_04.sql.txt?raw";
import sqlLecture5a from "../assets/notes/sql_05a_views.sql.txt?raw";
import sqlLecture5b from "../assets/notes/sql_05b_defaults_and_checks .sql.txt?raw";
import sqlLecture5c from "../assets/notes/sql_05c_triggers.sql.txt?raw";
import sqlLecture6a from "../assets/notes/sql_06a_indexing.sql.txt?raw";
import sqlLecture6b from "../assets/notes/sql_06b_functions_and_procedures.sql.txt?raw";

import styles from "./sql-viewer.module.css";

const sqlFiles = [
	{ name: "sql_01.sql.txt", content: sqlLecture1 },
	{ name: "sql_02.sql.txt", content: sqlLecture2 },
	{ name: "sql_03.sql.txt", content: sqlLecture3 },
	{ name: "sql_04.sql.txt", content: sqlLecture4 },
	{ name: "sql_05a_views.sql.txt", content: sqlLecture5a },
	{ name: "sql_05b_defaults_and_checks.sql.txt", content: sqlLecture5b },
	{ name: "sql_05c_triggers.sql.txt", content: sqlLecture5c },
	{ name: "sql_06a_indexing.sql.txt", content: sqlLecture6a },
	{ name: "sql_06b_functions_and_procedures.sql.txt", content: sqlLecture6b },
];

export default function SQLViewer() {
	const [fileIndex, setFileIndex] = useState(0);
	return (
		<div className={styles.container}>
			<div className={styles.controls}>
				<button
					disabled={fileIndex === 0}
					onClick={() => setFileIndex(fileIndex - 1)}>
					Previous
				</button>
				<button
					disabled={fileIndex === sqlFiles.length - 1}
					onClick={() => setFileIndex(fileIndex + 1)}>
					Next
				</button>
			</div>
			<h3
				className={
					styles.title
				}>{`Ονομα αρχειου: ${sqlFiles[fileIndex].name}`}</h3>
			<SyntaxHighlighter language="sql" style={oneDark}>
				{sqlFiles[fileIndex].content}
			</SyntaxHighlighter>
		</div>
	);
}
