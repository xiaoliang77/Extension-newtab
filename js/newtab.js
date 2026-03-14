var key_url = 'https://cn.bing.com/search?q=';

function out_s() {
    const search = $("#txt").val();
    if (!search) return alert('请先输入关键字');
    window.location.href = key_url + search;
}

$("#btn-sou").click(function () {
    out_s()
});

$("#txt").keydown(function (event) {
    if (event.which == 13) { // 回车键的键码为 13  
        out_s()
        event.preventDefault(); // 阻止默认行为（例如表单提交）  
    }
});

$('.yq-icon').click(function () {
    $('.search-engine').css('display', 'block')
})


$(function () {
    var search = {
        data: [{
            name: '百度',
            icon: 'baidu',
            url: 'https://www.baidu.com/s?wd='
        }, {
            name: '谷歌',
            icon: 'google',
            url: 'https://www.google.com/search?q='
        }, {
            name: '必应',
            icon: 'biying',
            url: 'https://cn.bing.com/search?q='
        }, {
            name: 'GitHub',
            icon: 'github',
            url: 'https://github.com/search?utf8=✓&q='
        }, {
            name: '360',
            icon: '360',
            url: 'https://www.so.com/s?q='
        }, {
            name: '淘宝',
            icon: 'taobao',
            url: 'https://s.taobao.com/search?q='
        }, {
            name: '京东',
            icon: 'jd',
            url: 'http://search.jd.com/Search?keyword='
        }, {
            name: '知乎',
            icon: 'zhihu',
            url: 'https://www.zhihu.com/search?type=content&q='
        }, {
            name: '微博',
            icon: 'weibo',
            url: 'https://s.weibo.com/weibo/'
        }, {
            name: 'B站',
            icon: 'bilibili',
            url: 'http://search.bilibili.com/all?keyword='
        }, {
            name: '豆瓣',
            icon: 'douban',
            url: 'https://www.douban.com/search?source=suggest&q='
        }, {
            name: '优酷',
            icon: 'youku',
            url: 'https://so.youku.com/search_video/q_'
        }]
    }
    for (var i = 0; i < search.data.length; i++) {
        // var addList = '<li><svg class="icon" aria-hidden = "true" ><use xlink:href="#' + search.data[i].icon +
        // 	'"></use></svg>' + search.data[i].name + '</li > '
        const addList = `<li><img src="imgs/${search.data[i].icon}.png" alt="" class="icon"><span>${search.data[i].name}</span></li>`
        $('.search-engine-list').append(addList);
    }

    $('#search-icon, .search-engine').hover(function() {
    	$('.search-engine').css('display', 'block')
    }, function() {
    	$('.search-engine').css('display', 'none')
    });



    $('.search-engine-list li').click(function () {
        const _index = $(this).index();
        const thisText = $(this).text() + '搜索';
        $('#txt').attr('placeholder', thisText)
        thisIcon = search.data[_index].icon;
        $('.search-engine').css('display', 'none')
        $('.yq-icon>img').attr("src", "imgs/" + thisIcon + ".png");
        key_url = search.data[_index].url;
    });
})
