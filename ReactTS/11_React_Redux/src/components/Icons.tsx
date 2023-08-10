interface Action {
	handler: () => void;
}

export const DeleteButton: React.FC<Action> = ({ handler }) => {
	return (
		<button
			type="button"
			className="btn"
			style={{ backgroundColor: "#C70039" }}
			onClick={handler}
		>
			<svg
				width={50}
				height={50}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-6 h-6"
				aria-labelledby="svg-delete-icon"
			>
				<title id="svg-delete-icon">Delete Icon</title>
				<path
					fill="#C70039"
					stroke="#fff"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
				/>
			</svg>
		</button>
	);
};

export const EditButton: React.FC<Action> = ({ handler }) => {
	return (
		<button
			type="button"
			className="btn btn-edit"
			style={{ backgroundColor: "#4477CE" }}
			onClick={handler}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-6 h-6"
				aria-labelledby="svg-edit-icon"
			>
				<title id="svg-edit-icon">Edit Icon</title>
				<path
					fill="#4477CE"
					stroke="#fff"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
				/>
			</svg>
		</button>
	);
};

export const SaveButton: React.FC<Action> = ({ handler }) => {
	return (
		<button
			type="button"
			className="btn btn-edit"
			style={{ backgroundColor: "#54B435" }}
			onClick={handler}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-6 h-6"
				aria-labelledby="svg-save-icon"
			>
				<title id="svg-save-icon">Save Icon</title>
				<path
					fill="#54B435"
					stroke="#fff"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
				/>
			</svg>
		</button>
	);
};

interface Props {
	isEditing: boolean;
	editHandler: () => void;
	saveHandler: () => void;
}

export const EditControl: React.FC<Props> = ({
	isEditing,
	editHandler,
	saveHandler,
}) => {
	return isEditing ? (
		<EditButton handler={editHandler} />
	) : (
		<SaveButton handler={saveHandler} />
	);
};
