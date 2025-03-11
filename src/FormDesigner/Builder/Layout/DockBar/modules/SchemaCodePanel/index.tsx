import React from "react";
import CodeView from "../../../../../_Common/Components/CodeView";
import {useFormBuilderContext} from "../../../../Context/Hooks/UseFormBuilderContext.ts";


const SchemaCodePanel: React.FC = () => {
    const {state} = useFormBuilderContext();
    const code = React.useMemo(() => {
      return JSON.stringify(state.schemas, null, 2)
    }, [state.schemas])
    return (
        <>
            <CodeView
                language={'json'}
            >
                {code}
            </CodeView>
        </>
    )
}

export default SchemaCodePanel