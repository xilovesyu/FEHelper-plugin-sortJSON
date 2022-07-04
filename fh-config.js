{
    "sort-json": {
        "name": "JSON 排序工具",
        "tips": "我是 sort-json 的描述信息！你可以在这里修改！",
        "noPage": false,
        "contentScript": true,
        "contentScriptCss": false,
        "menuConfig": [
            {
                "icon": "⒳",
                "text": "我是 sort-json",
                "onClick": function (info, tab) {
                    alert("你好，我是sort-json!");
                    chrome.DynamicToolRunner({
                        query: "tool=sort-json"
                    });
                }
            }
        ],
        "updateUrl": null
    }
}