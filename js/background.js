chrome.contextMenus.create({
  type: 'normal',
  title: '百度一下',
  contexts: ['selection'],
  onclick: (info) => {
    window.open('https://www.baidu.com/s?wd=' + info.selectionText.replaceAll('&', '%26'))
  },
})
