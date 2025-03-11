import {IFormBuilderState} from "./IFormBuilderState.ts";
import React from "react";
import {FormBuilderActionType} from "./FormBuilderActionType.ts";

export type FormBuilderContextDataType = {
    state: IFormBuilderState;
    dispatch: React.Dispatch<FormBuilderActionType>;
} | null