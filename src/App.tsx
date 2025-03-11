import FormDesigner from "./FormDesigner";
import Icon from "./FormDesigner/_Common/Components/Icon";
import {DatasourceTypeEnum} from "./FormDesigner/_Common/Enums/DatasourceTypeEnum.ts";
import {IDictionaryDatasource, IStaticDatasource} from "./FormDesigner/_Common/Types/DatasourceType.ts";
import {IFormBuilderCustomConfig} from "./FormDesigner/_Common/Types/IFormBuilderCustomConfig.ts";

function App() {
    const config: IFormBuilderCustomConfig = {
        datasource: [
            {
                id: '3',
                type: DatasourceTypeEnum.static,
                name: '测试选项3',
                data: [
                    {label: '测试选项1', value: 'option1'},
                    {label: '测试选项2', value: 'option2'},
                    {label: '测试选项3', value: 'option3'},
                ],
                version: 1
            } as IStaticDatasource,
            {
                "id": "267e8e93-4317-4912-9d99-8dce1f7aaece",
                "name": "状态",
                "code": "status",
                "data": [
                    {
                        "label": "正常",
                        "value": "1"
                    },
                    {
                        "label": "过期",
                        "value": "2"
                    },
                    {
                        "label": "锁定",
                        "value": "3"
                    }
                ],
                "type": "dictionary",
                "version": 1
            } as unknown as IDictionaryDatasource,
        ],
        eventListener: (key, data) => {
            console.log(key, data)
        }
    }

    return (
        <>
            <Icon name={'datatype-api'}/>
            <FormDesigner.FormBuilder config={config}/>
        </>
    )
}

export default App
