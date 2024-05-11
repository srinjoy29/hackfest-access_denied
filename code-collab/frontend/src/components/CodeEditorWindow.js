// import React, { useState } from "react";
// import Editor from "@monaco-editor/react";

// const CodeEditorWindow = ({ onChange, language, code, theme }) => {
//     const [value, setValue] = useState(code || "");

//     const handleEditorChange = (value) => {
//         setValue(value);
//         onChange("code", value);
//     };

//     return (
//         <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
//             <Editor
//                 height="85vh"
//                 width={`100%`}
//                 language={language || "cpp"}
//                 value={value}
//                 theme={theme}
//                 defaultValue="// some comment"
//                 onChange={handleEditorChange}
//             />
//         </div>
//     );
// };
// export default CodeEditorWindow;


import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import io from "socket.io-client";

const CodeEditorWindow = ({ onChange, language, code, theme }) => {
    const [value, setValue] = useState(code || "");
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io("http://localhost:5000"); // Replace with your Socket.IO server URL
        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
        };
    }, []);

    useEffect(() => {
        if (!socket) return;

        const handleEditorChange = (newValue) => {
            setValue(newValue);
            onChange("code", newValue);
            socket.emit("codeChange", newValue); // Emit code change event to server
        };

        socket.on("codeChange", (newValue) => {
            setValue(newValue);
        });

        return () => {
            socket.off("codeChange");
        };
    }, [socket, onChange]);

    return (
        <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
            <Editor
                height="85vh"
                width={`100%`}
                language={language || "cpp"}
                value={value}
                theme={theme}
                defaultValue="// some comment"
                onChange={setValue}
            />
        </div>
    );
};

export default CodeEditorWindow;
