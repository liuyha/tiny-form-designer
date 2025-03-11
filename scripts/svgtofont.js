
import svgtofont from 'svgtofont';
import path from 'path';

const fontName = 'icon';
const classNamePrefix = 'icon';



async function init() {
    try {
        await svgtofont({
            src: path.resolve(process.cwd(), './icons/svgs/convert_to_fonts'),
            dist: path.resolve(process.cwd(), './icons/fonts'),
            fontName,
            classNamePrefix,
            // 生成 CSS 文件
            css: {
                fontSize: '16px',
                fontStyle: 'normal'
            },
            typescript: true,
            startUnicode: 0xe000, // 从私有使用区（PUA）起始
            // 清空输出目录
            emptyDist: true,
            useCSSVars: false,
            outSVGReact: false,
            outSVGPath: false,
            svgicons2svgfont: {
                fontHeight: 1000, // 字体高度
                normalize: true, // 规范化大小
                centerHorizontally: true, // 水平居中
                centerVertically: true // 垂直居中
            },
            generateInfoData: true,
            website: {
                title: 'liuyh-icon',
                logo: null
            }
        });
    } catch (err) {
        console.log(err);
    }
}

init();