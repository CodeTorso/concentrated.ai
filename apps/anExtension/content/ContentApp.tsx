import React from 'react'

export default function ContentApp() {
  return (
    <div className="bg-black text-white py-2 px-4 font-medium text-5xl">
      Hello there, website list: 
      <TabList />
    </div>
  )
}

function TabList() {
  const [tabs, setTabs] = React.useState<{ id?: number; title?: string; url?: string }[]>([]);

  React.useEffect(() => {
    chrome.runtime.sendMessage({ action: "getTabs" }, (response) => {
      const tabInfo = response.map((tab: chrome.tabs.Tab) => ({
        id: tab.id,
        title: tab.title,
        url: tab.url,
      }));
      setTabs(tabInfo);
    });
  }, []);

  const truncateUrl = (url: string) => {
    return url.length > 50 ? `${url.substring(0, 47)}...` : url;
  };

  const handleRemoveTab = (tabId?: number) => {
    if (tabId !== undefined) {
      chrome.runtime.sendMessage({ action: "removeTab", tabId }, (response) => {
        if (response.status === "success") {
          setTabs(tabs.filter(tab => tab.id !== tabId));
        }
      });
    }
  };

  return (
    <div>
      {tabs.map((tab, index) => (
        <div key={index} className="my-2">
          <h2 className="text-3xl">{tab.title}</h2>
          <p className="text-xl">{truncateUrl(tab.url || "")}</p>
          <button
            onClick={() => handleRemoveTab(tab.id)}
            className="bg-red-500 text-white py-1 px-2 rounded"
          >
            Close Tab
          </button>
        </div>
      ))}
    </div>
  );
}
