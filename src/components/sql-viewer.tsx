import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import sqlLecture1 from "../assets/notes/sql_01.sql.txt?raw";
import sqlLecture2 from "../assets/notes/sql_02.sql.txt?raw";
import sqlLecture3 from "../assets/notes/sql_03.sql.txt?raw";
import sqlLecture4 from "../assets/notes/sql_04.sql.txt?raw";
import sqlLecture5a from "../assets/notes/sql_05a_views.sql.txt";
import sqlLecture5b from "../assets/notes/sql_05b_defaults_and_checks .sql.txt?raw";
import sqlLecture5c from "../assets/notes/sql_05c_triggers.sql.txt?raw";
import sqlLecture6a from "../assets/notes/sql_06a_indexing.sql.txt?raw";
import sqlLecture6b from "../assets/notes/sql_06b_functions_and_procedures.sql.txt?raw";

const sqlFiles = [
	sqlLecture1,
	sqlLecture2,
	sqlLecture3,
	sqlLecture4,
	sqlLecture5a,
	sqlLecture5b,
	sqlLecture5c,
	sqlLecture6a,
	sqlLecture6b,
];
export default function SQLViewer() {
	const [fileIndex, setFileIndex] = useState(0);
	// function handlePrevious() {}
	return (
		<div>
			<div>
				<button onClick={() => setFileIndex(fileIndex - 1)}>Previous</button>
				<button onClick={() => setFileIndex(fileIndex + 1)}>Next</button>
			</div>
			<h2>SQL Script</h2>
			<SyntaxHighlighter language="sql" style={oneDark}>
				{sqlFiles[fileIndex]}
			</SyntaxHighlighter>
		</div>
	);
}
