import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

function Editor(props) {
	const { language, displayName, value, onChange } = props;

	const [open, setOpen] = useState(true);

	function handleChange(editor, data, value) {
		onChange(value);
	}

	return (
		<React.Fragment>
			<div className={`Editor-container ${open === true ? "" : "collapsed"}`}>
				<div className="Editor-title">
					{displayName}
					<button
						className="expand-collapse-btn"
						onClick={() => setOpen((prevOpen) => !prevOpen)} // invert open and non open when clicked
					>
						<FontAwesomeIcon
							icon={open === true ? faCompressAlt : faExpandAlt}
						/>
					</button>
				</div>
				<ControlledEditor
					onBeforeChange={handleChange} 
					value={value} 
					className="code-mirror-wrapper"
					options={{
						lineWrapping: true,
						lint: true,
						mode: language,
						theme: "material",
						lineNumbers: true,
					}}
				/>
			</div>
		</React.Fragment>
	);
}

export default Editor;
