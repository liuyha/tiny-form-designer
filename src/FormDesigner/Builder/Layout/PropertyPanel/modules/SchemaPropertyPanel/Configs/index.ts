import {WidgetType} from "../../../../../../_Common/Types/WidgetType.ts";
import {IPropertyFormCollapseConfig} from "../../../../../../_Common/Types/IPropertyFormCollapseConfig.ts";
import {WidgetTypeEnum} from "../../../../../../_Common/Enums/WidgetTypeEnum.ts";
import InputPropertyFormCollapseConfig from "./InputPropertyFormCollapseConfig.tsx";
import TextareaPropertyFormCollapseConfig from "./TextareaPropertyFormCollapseConfig.tsx";
import InputNumberPropertyFormCollapseConfig from "./InputNumberPropertyFormCollapseConfig.tsx";
import InputPasswordPropertyFormCollapseConfig from "./InputPasswordPropertyFormCollapseConfig.tsx";
import SelectPropertyFormCollapseConfig from "./SelectPropertyFormCollapseConfig.tsx";
import RadioPropertyFormCollapseConfig from "./RadioPropertyFormCollapseConfig.tsx";
import CheckboxPropertyFormCollapseConfig from "./CheckboxPropertyFormCollapseConfig.tsx";
import UploadPropertyFormCollapseConfig from "./UploadPropertyFormCollapseConfig.tsx";
import DatePickerPropertyFormCollapseConfig from "./DatePickerPropertyFormCollapseConfig.tsx";
import TimePickerPropertyFormCollapseConfig from "./TimePickerPropertyFormCollapseConfig.tsx";
import DatetimePickerPropertyFormCollapseConfig from "./DatetimePickerPropertyFormCollapseConfig.tsx";
import DateRangePickerPropertyFormCollapseConfig from "./DateRangePickerPropertyFormCollapseConfig.tsx";
import TimeRangePickerPropertyFormCollapseConfig from "./TimeRangePickerPropertyFormCollapseConfig.tsx";
import DatePickerRangePropertyFormCollapseConfig from "./DatetimeRangePickerPropertyFormCollapseConfig.tsx";

export const WidgetPropertyFormCollapseItemBuilderMap: Record<Partial<WidgetType>, () => IPropertyFormCollapseConfig | null> = {
    [WidgetTypeEnum.INPUT]: InputPropertyFormCollapseConfig,
    [WidgetTypeEnum.TEXTAREA]: TextareaPropertyFormCollapseConfig,
    [WidgetTypeEnum.INPUT_NUMBER]: InputNumberPropertyFormCollapseConfig,
    [WidgetTypeEnum.INPUT_PASSWORD]: InputPasswordPropertyFormCollapseConfig,
    [WidgetTypeEnum.SELECT]: SelectPropertyFormCollapseConfig,
    [WidgetTypeEnum.RADIO]: RadioPropertyFormCollapseConfig,
    [WidgetTypeEnum.CHECKBOX]: CheckboxPropertyFormCollapseConfig,
    [WidgetTypeEnum.UPLOAD]: UploadPropertyFormCollapseConfig,
    [WidgetTypeEnum.DATE_PICKER]: DatePickerPropertyFormCollapseConfig,
    [WidgetTypeEnum.TIME_PICKER]: TimePickerPropertyFormCollapseConfig,
    [WidgetTypeEnum.DATETIME_PICKER]: DatetimePickerPropertyFormCollapseConfig,
    [WidgetTypeEnum.DATE_RANGE_PICKER]: DateRangePickerPropertyFormCollapseConfig,
    [WidgetTypeEnum.TIME_RANGE_PICKER]: TimeRangePickerPropertyFormCollapseConfig,
    [WidgetTypeEnum.DATETIME_RANGE_PICKER]: DatePickerRangePropertyFormCollapseConfig,
}


