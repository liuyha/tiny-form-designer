
import Input from './modules/Input';
import Textarea from './modules/Textarea';
import InputNumber from './modules/InputNumber';
import PasswordInput from './modules/InputPassword.tsx';
import Select from './modules/Select';
import Radio from './modules/Radio';
import Checkbox from './modules/Checkbox';
import Upload from "./modules/Upload.tsx";
import DatePicker from "./modules/DatePicker.tsx";
import TimePicker from "./modules/TimePicker.tsx";
import DatetimePicker from './modules/DatetimePicker.tsx';
import DateRangePicker from "./modules/DateRangePicker.tsx";
import TimeRangePicker from "./modules/TimeRangePicker.tsx";
import DatetimeRangePicker from "./modules/DatetimeRangePicker.tsx";

/*
import DatePicker from './modules/DatePicker';
import TimePicker from './modules/TimePicker';
import Upload from './modules/Upload';
import Table from './modules/Table';
import Tree from './modules/Tree';
import List from './modules/List';*/


export const WIDGET_ELEMENT_CONFIG = {
    input: Input,
    textarea: Textarea,
    inputNumber: InputNumber,
    inputPassword: PasswordInput,
    select: Select,
    radio: Radio,
    checkbox: Checkbox,
    upload: Upload,
    datePicker: DatePicker,
    timePicker: TimePicker,
    datetimePicker: DatetimePicker,
    dateRangePicker: DateRangePicker,
    timeRangePicker: TimeRangePicker,
    datetimeRangePicker: DatetimeRangePicker,
} as const;