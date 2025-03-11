import React from "react";
import BuilderLayout from "./Layout";
import {IFormBuilderCustomConfig} from "../_Common/Types/IFormBuilderCustomConfig.ts";
import {useFormBuilderConfig} from "./Context/Hooks/UseFormBuilderConfig.ts";

export type FormBuilderProps = {
    config?: IFormBuilderCustomConfig
}

const Builder: React.FC<FormBuilderProps> = (props) => {
    const formBuilderConfig = useFormBuilderConfig();
    React.useEffect(() => {
        formBuilderConfig.setConfig(props.config)
    }, [props.config])
    return (
        <div className={'tiny-form-designer form-builder'}>
            <BuilderLayout/>
        </div>
    )
}

export default Builder