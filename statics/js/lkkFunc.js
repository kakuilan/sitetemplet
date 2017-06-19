/**
 * Created by kakuilan@163.com/lianq.net on 2017/6/3.
 * Desc: 自定义函数库
 */


/**
 * JqGrid刷新函数
 * @param selector JqGrid选择器
 * @param newParams 参数对象
 */
function refreshJqGrid(selector, newParams) {
    var data = $(selector).jqGrid('getGridParam', null);
    if(typeof newParams === 'object') {
        data = $.extend({}, data, newParams);
    }
    $(selector).jqGrid('setGridParam',data).trigger("reloadGrid");//重新载入
}

