/**
 * Created by liuyidi on 15/10/26.
 */


/*增强版取URL中的参数*/
function getQueryString(){
    var result = {},
        queryString = location.search.substring(1),
        re = /([^&=]+)=([^&]*)/g, m;

    while(m = re.exec(queryString)){
        result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }

    return result;
}

//demo
var myParam = getQueryString()["myParam"];