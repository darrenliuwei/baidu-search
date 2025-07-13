chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    type: 'normal',
    id: 'myUniqueMenuItemId',
    title: '百度一下',
    contexts: ['selection'],
  })
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'myUniqueMenuItemId') {
    if (info.selectionText) {
      chrome.tabs.create({
        url: `https://www.baidu.com/s?wd=` + info.selectionText.replaceAll('&', '%26'),
        active: true,
      })
    }
  }
})
