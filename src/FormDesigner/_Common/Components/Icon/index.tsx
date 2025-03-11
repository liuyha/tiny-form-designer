import React, {HTMLAttributes} from "react";
import './styles.css'
import classnames from "classnames";
import {ICON_CONFIG} from './IconConfig.ts';

export type IconProps = {
    name: keyof typeof ICON_CONFIG;
    svg?: string;
    size?: number | string;
    color?: string;
} & HTMLAttributes<HTMLSpanElement>

const Icon: React.FC<IconProps> = (props) => {
    const {
        name,
        svg,
        size = 16,
        color,
        style,
        className, ...restProps } = props;
    const [svgContent, setSvgContent] = React.useState<string>('');
    React.useEffect(() => {
        const loadSvg = async () => {
            if (svg) {
                setSvgContent(svg);
                return;
            }

            setSvgContent(ICON_CONFIG[name]);
        };

        loadSvg();
    }, [name, svg]);
    if (!svgContent) {
        return null; // 加载中或加载失败不渲染
    }

    const styles: React.CSSProperties = {
        color,
        width: `${size}px`,
        height: `${size}px`,
        fontSize: `${size}px`,
        ...style
    };

    const classNames = classnames(
        'icon',
        {
            [`${className}`] : className
        }
    )



    // 创建一个临时DOM元素来解析SVG内容并修改宽高属性
    const processSvgSize = (svgStr: string) => {
        const div = document.createElement('div');
        div.innerHTML = svgStr;
        const svgEl = div.querySelector('svg');
        if (svgEl) {
            svgEl.setAttribute('width', '1em');
            svgEl.setAttribute('height', '1em');
            return div.innerHTML;
        }
        return svgStr;
    };
    return (
        <span
            className={classNames}
            dangerouslySetInnerHTML={{ __html: processSvgSize(svgContent) }}
            {...restProps}
            style={styles}
        />
    )
}

export default Icon;