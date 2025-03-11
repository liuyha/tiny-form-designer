import React from "react";
import hljs from 'highlight.js';
import 'highlight.js/styles/intellij-light.min.css';

hljs.configure({ignoreUnescapedHTML: true});

export type CodeViewProps = {
    children?: string; // 确保 children 是字符串
    language?: string;
};

const CodeView: React.FC<CodeViewProps> = ({children = '', language = 'plaintext'}) => {
    const codeRef = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
        if (codeRef.current) {
            const highlighted = hljs.highlight(children, {language});
            codeRef.current.innerHTML = highlighted.value;
        }
    }, [children, language]);

    return (
        <pre>
            <code ref={codeRef} className={`language-${language}`}/>
        </pre>
    );
};

export default CodeView;