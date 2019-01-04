export default (property) => {
    return (object) => {
        Object.assign(object.prototype, property);
    }
}


/**
 *
 *
 * @param {* string} value 目标字符串
 * @param {* array} position 光标的位置
 * @param {* string} paddingStr 填充的字符串
 * @param {* string} inputEl 返回的目标字符串
 */
export const paddingStr = (value, position, paddingStr, inputEl) => {
    position.forEach((item, index) => {
        if (value.length > item + index) {
            value = value.substring(0, item + index) + padstr + value.substring(item + index)
        }
    })
    value = value.trim();
    // 解决安卓部分浏览器插入空格后光标错位问题
    requestAnimationFrame(() => {
        inputElement.setSelectionRange(value.length, value.length);
    })
    return value;
}