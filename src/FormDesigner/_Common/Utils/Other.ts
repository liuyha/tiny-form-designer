import {v4 as uuidV4} from 'uuid'
import {IWidgetSchema} from "../Types/IWidgetSchema.ts";

/**
 * 生成随机字符串
 */
export const generateRandomString = () => {
    return Math.random().toString(36).substring(2, 14);
};

/**
 * 生成uuid
 */
export const generateUuid = () => {
    return uuidV4()
};


/**
 * 转换Schema到表单值
 * @param schema schema
 */
export const convertSchemaToFormValue = (schema?: IWidgetSchema) => {
    if (!schema) return {};

    const values: Record<string, any> = {};

    const flattenObject = (obj: any, prefix = '') => {
        for (const key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                flattenObject(obj[key], prefix ? `${prefix}.${key}` : key);
            } else {
                values[prefix ? `${prefix}.${key}` : key] = obj[key];
            }
        }
    };

    if (schema.defaultProps) {
        flattenObject(schema.defaultProps, 'props');
    }

    if (schema.props) {
        flattenObject(schema.props, 'props');
    }


    if (schema.defaultFormItemProps) {
        flattenObject(schema.defaultFormItemProps, 'formItemProps');
    }
    if (schema.formItemProps) {
        flattenObject(schema.formItemProps, 'formItemProps');
    }



    if (schema.defaultExtendProps) {
        flattenObject(schema.defaultExtendProps, 'extendProps');
    }

    if (schema.extendProps) {
        flattenObject(schema.extendProps, 'extendProps');
    }

    return values;
}


/**
 * 转换表单值为Schema
 * @param schema schema
 * @param values 表单值
 */
export const convertFormValueToSchema = (schema?: IWidgetSchema, values?: Record<string, any>): IWidgetSchema | undefined => {
    if (!schema || !values) return;
    const [key, value] = Object.entries(values)[0];
    const [group, ...fields] = key.split('.');

    const updateNestedValue = (obj: any, path: string[], value: any): any => {
        const [current, ...rest] = path;
        if (rest.length === 0) {
            return {...obj, [current]: value};
        }
        return {
            ...obj,
            [current]: updateNestedValue(obj[current] || {}, rest, value)
        };
    };
    return {
        ...schema,
        [group]: updateNestedValue(
            schema[group as keyof typeof schema] || {},
            fields,
            value
        )
    };
}


/**
 * 判断对象是否有某个key是否有值
 * @param obj 对象
 * @param key 键
 */
export const hasValue = (obj: any, key = 'id') => {
    return Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== undefined  && obj[key] !== null;
}