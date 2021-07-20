var tipuesearch = {"pages": [{'title': '倉儲', 'text': 'The website is\xa0 https://github.com/50733146/lkh-1 \n source:\xa0 https://github.com/mdecourse/cmstemplate \n #branch 林冠澔 (Lin,Kuan,Hao)\xa0 \n', 'tags': '', 'url': '倉儲.html'}, {'title': '2021', 'text': '', 'tags': '', 'url': '2021.html'}, {'title': '2021.03.02', 'text': 'sign up the warehousing \n', 'tags': '', 'url': '2021.03.02.html'}, {'title': '2021.03.04', 'text': 'add ssh keys to\xa0 https://github.com/settings/keys \n 1.建立 OpenSSH key\xa0 \xa0 \n # pair ssh-keygen -t rsa -b 4096 -C\xa0 "使用者學號" \n 2.Putty 作為 SSH 連線客戶端工具 \n #\xa0 https://www.putty.org/ \n 3.以 SSH 協定與 Github 連線 \n 建立一對 OpenSSH key pair, private key 保留在近端, 將 public key 登記在 Github 所屬帳號設定中 \n #\xa0set GIT_SSH=%Disk%:\\putty\\plink.exe \n 表示 git 將透過 putty 工具以 ssh 加密協定對 Github 連線 \n 4.利用 SSH 對 Gitlab 連線 \n 將OpenSSH 格式的 public key 登錄到 Gitlab 帳號下 \n 利用 putty.exe 建立 session 名稱為 github.com 的設定, 其中設定 AUTH 與 Proxy 資料 \n 在.git/config\xa0以url = git@gitlab.com:user_name/url 對 gitlab 連接 \n -------------------------------------------------------------------------------------------------- \n ssh:網路連線加密機制,可以利用 ssh 帳號@遠端主機 ip 或符號名稱, 就可以輸入認證密碼, 登入到遠端主機,無須提供密碼認證 \n \n', 'tags': '', 'url': '2021.03.04.html'}, {'title': '2021.03.11', 'text': 'git pull origin master \n 1.acp.bat 2.cms.bat 3.http-serve.py 4.localhost.crt 5.localhost.key move to LKH \n Reference:\xa0 https://cythilya.github.io/2018/06/19/git-merge-branch-into-master/ \n acp.bat:已接將git add . 、git commit -m "message"、git push 合併 \n cms.bat:已將cd cmsimde、python wsgi.py 合併 \n -------------------------------------------------------------------------------------------------- \n acp.bat、cms.bat將指令精簡化 \n \n', 'tags': '', 'url': '2021.03.11.html'}, {'title': '2021.04.28', 'text': '建立Windows系統與Ubuntu系統\xa0 \n 1.Windows 10專業版 \n 開機後的網路設置-IPv6 名稱：kmollab \n 2.Ubuntu server 20.04-1 \n 開機後的網路設置-IPv6 \n DNS設置-系上配置 \n 名稱：kmol \n -------------------------------------------------------------------------------------------------- \n *預計建立虛擬主機，開機時自動開啟動態、靜態網站 \n', 'tags': '', 'url': '2021.04.28.html'}, {'title': '2021.05.13', 'text': '自行利用 Ubuntu 建立可啟動 CMSiMDE 動態系統與 Fossil SCM 伺服器的目的 \n', 'tags': '', 'url': '2021.05.13.html'}, {'title': '2021.07.01', 'text': '\n 建立 Heroku 帳號 \n 建立 Heroku app \n 下載 Heroku CLI 程式檔案, 解開至隨身碟 Y: 所在位置或 \n 修改命令搜尋路徑\xa0--在start.bat中加入: \n \n set   path_heroku = % Disk % :\\heroku\\ bin ; \n path =% path_heroku % ; \n set   HTTP_PROXY = http: / / [ 2001 : 288 : 6004 : 17 :: 53 ]: 3128 \n set   HTTPS_PROXY = http: / / [ 2001 : 288 : 6004 : 17 :: 53 ]: 3128 \n \n \n 測試 Heroku\xa0 \n \n #heroku --version \n \n \n 設定 Heroku 代理主機 \n \n #heroku login -i \n \n \n 設定同步倉儲,進到倉儲位置下\xa0 \n \n #heroku git:remote -a "heroku app name" \n \n \n 以 git 進行提交推送\xa0 \n \n #git push heroku\xa0 \n \n \n \n -------------------------------------------------------------------------------------------------- \n 過程中 \n \n 提交推送 #Failed to connect to github.com\xa0 \n \n 解決 \n \n git config --global --unset  HTTP_PROXY \n git config --global --unset  HTTPS_PROXY \n \n -------------------------------------------------------------------------------------------------- \n 之後heroku login，可直接push heroku同步到\xa0 https://git.heroku.com/lkh-1.git \n Heroku website:\xa0 https://dashboard.heroku.com/apps/lkh-1 \n', 'tags': '', 'url': '2021.07.01.html'}, {'title': '2021.07.02', 'text': '在\xa0 https://github.com/50733146/lkh-1 \xa0中的README.md 使用svg檔 \n 將\xa0 https://50733146.github.io/lkh-1/ \xa0連結納入 \n -------------------------------------------------------------------------------------------------- \n 使用  WordPress \xa0建立網站\xa0 \n website:\xa0 https://lkh125275799.wordpress.com/ \n', 'tags': '', 'url': '2021.07.02.html'}, {'title': '2021.07.03', 'text': '測試 github command 與github desktop \n git:  https://git-scm.com/ \n Download↓ \n github desktop:\xa0 https://desktop.github.com/ \n Download↓ \n \n', 'tags': '', 'url': '2021.07.03.html'}, {'title': 'SSH', 'text': '1.建立 OpenSSH key\xa0 \xa0 \n # pair ssh-keygen -t rsa -b 4096 -C\xa0 "使用者學號" \n 2.Putty 作為 SSH 連線客戶端工具 \n #\xa0 https://www.putty.org/ \n 3.以 SSH 協定與 Github 連線 \n 建立一對 OpenSSH key pair, private key 保留在近端, 將 public key 登記在 Github 所屬帳號設定中 \n #\xa0set GIT_SSH=%Disk%:\\putty\\plink.exe \n 表示 git 將透過 putty 工具以 ssh 加密協定對 Github 連線 \n 4.利用 SSH 對 Gitlab 連線 \n 將OpenSSH 格式的 public key 登錄到 Gitlab 帳號下 \n 利用 putty.exe 建立 session 名稱為 github.com 的設定, 其中設定 AUTH 與 Proxy 資料 \n 在.git/config\xa0以url = git@gitlab.com:user_name/url 對 gitlab 連接 \n -------------------------------------------------------------------------------------------------- \n ssh:網路連線加密機制,可以利用 ssh 帳號@遠端主機 ip 或符號名稱, 就可以輸入認證密碼, 登入到遠端主機,無須提供密碼認證 \n', 'tags': '', 'url': 'SSH.html'}, {'title': 'Heroku', 'text': '\n 建立 Heroku 帳號 \n 建立 Heroku app \n 下載 Heroku CLI 程式檔案, 解開至隨身碟 Y: 所在位置或 \n 修改命令搜尋路徑\xa0--在start.bat中加入: \n \n set \xa0 path_heroku = % Disk % :\\heroku\\ bin ; \n path =%path_heroku%; \n set \xa0 HTTP_PROXY = http: / / [ 2001 : 288 : 6004 : 17 :: 53 ]: 3128 \n set \xa0 HTTPS_PROXY = http: / / [ 2001 : 288 : 6004 : 17 :: 53 ]: 3128 \n \n \n 測試 Heroku\xa0 \n \n #heroku --version \n \n \n 設定 Heroku 代理主機 \n \n #heroku login -i \n \n \n 設定同步倉儲,進到倉儲位置下\xa0 \n \n #heroku git:remote -a "heroku app name" \n \n \n 以 git 進行提交推送\xa0 \n \n #git push heroku\xa0 \n \n \n \n -------------------------------------------------------------------------------------------------- \n 過程中 \n \n 提交推送 #Failed to connect to github.com\xa0 \n \n 解決 \n \n git config --global --unset   http.proxy \n git config --global --unset   https.proxy \n \n -------------------------------------------------------------------------------------------------- \n 之後heroku login，可直接push heroku同步到 https://git.heroku.com/lkh-1.git \n Heroku website: https://dashboard.heroku.com/apps/lkh-1 \n \n', 'tags': '', 'url': 'Heroku.html'}, {'title': 'LaTeX', 'text': 'MiKTeX:\xa0 https://miktex.org/download \n Download\xa0 ↓ \n TEXMAKER:  https://www.xm1math.net/texmaker/download.html \n Download\xa0 ↓ \n 指令參考\xa0 1.   2.   3. \xa0 4.   5. \n -------------------------------------------------------------------------------------------------- \n 只需要安裝 2 個軟件包，MiKTeX 和 Texmaker \n Texmaker 是 Latex 的編輯器，MiKTeX 負責編譯指令參考 \n', 'tags': '', 'url': 'LaTeX.html'}, {'title': '2021 P-TECH 暑期實習', 'text': '職缺相關之訊\xa0 2021 P-TECH 暑期實習職缺 \n 面試履歷\xa0 P-TECH實習 _林冠澔_ (TSS)System Services Representative -X86 \n 面試主管 \n \n Ray Chou-TSS Branch Dicector(好像是負責中部地區"台中以南、嘉義以北") \n Tasha Chang-Industry Program Manager, IBM Corporate Citizenship \n \n 面使流程 \n \n 主管自我介紹、在台中分部工作含蓋範圍 \n 自我介紹 \n 問想從這個職缺獲得什麼 \n 問未來的打算(長遠) \n 問精密機械(本科系)跟IT不同領域的落差如何看待 \n 問對IBM瞭解多少 \n 問對AI瞭解多少 \n 問主管問題(a.工作甚任條件、b.組織未來發展趨勢 \n \n 因為涵蓋範圍很廣，對知識、技術要求不多，主要是態度、企圖心等等 \n 主要有兩個，分別是AI跟Cloud \n \n \n 問衝突如何解決 \n End~ \n \n TSS部門參考資料\xa0 IBM-TSS.pdf \n -------------------------------------------------------------------------------------------------- \n 面試解果-今年疫情取消實習計畫 \n', 'tags': '', 'url': '2021 P-TECH 暑期實習.html'}, {'title': '插大', 'text': '', 'tags': '', 'url': '插大.html'}, {'title': '國立普通大學', 'text': '\n 成功大學-- 考古題 \n 台灣大學-- 考古題 \n 清華大學-- 考古題 \n 中央大學-- 考古題 \n 中興大學-- 考古題 \n 中正大學-- 考古題 \n 中山大學-- 考古題 \n', 'tags': '', 'url': '國立普通大學.html'}, {'title': '國立科技大學', 'text': '', 'tags': '', 'url': '國立科技大學.html'}, {'title': '私立普通大學', 'text': '\n \n', 'tags': '', 'url': '私立普通大學.html'}, {'title': '私立科技大學', 'text': '', 'tags': '', 'url': '私立科技大學.html'}, {'title': '程式', 'text': '', 'tags': '', 'url': '程式.html'}, {'title': 'Python', 'text': 'Python是一種廣泛使用的直譯式、進階和通用的程式語言。Python支援多種程式設計範式，包括函數式、指令式、結構化、物件導向和反射式程式。它擁有動態型別系統和垃圾回收功能，能夠自動管理記憶體使用，並且其本身擁有一個巨大而廣泛的標準庫。 \n -------------------------------------------------------------------------------------------------- \n Python:\xa0 https://www.python.org/ \n Download↓ \n Visual Studio Code:\xa0 https://code.visualstudio.com/ \n Download↓ \n PyCharm:\xa0 https://www.jetbrains.com/pycharm/ \n Download↓ \n \n', 'tags': '', 'url': 'Python.html'}, {'title': '入門', 'text': '有序列表: \n list=[11,22,33,44,55,66]\nprint(list[0])\ndata=[[1,2,3],[4,5,6]]\ndata[0][0:2]=[3,3,3]\nprint(data[0]) \n 集合、字典的運算: \n s1={1,2,3,4}\ns2={3,4,5,6}\ns3=s1&s2\n#交集:取相同資料\ns4=s1|s2\n#聯集:區所有資料 但不重複\ns5=s1^s2\n#反交集:取不重複資料\nprint(s3)\nprint(s4)\ndic={"apple":"蘋果","bug":"錯誤"}\nprint(dic) \n 流程控制: if , while , for , break , continue , else \n 函數參數定義: def\xa0 \n def io(x,y=0):\n    print(x*y)\nio(2,2)\nio(2)\ndef avg(*ns):\n        #*無限數值\n    sum=0\n    for m in ns:\n        sum=sum+m\n    print(sum)\navg(1,2)\navg(1,2,3)\navg(-2,-1,1,2) \n 模組設計與使用: \n \n 模組讀取，import 可以自行創建 or 使用內建模組 \n \n import point \n 檔案讀取和儲存: \n \n 方法一 \n \n file=open("data.txt",mode="w",encoding="utf-8")\nfile.write("test one more time\\n在測試一次",)\nfile.close() \n \n 方法二(較佳) \n \n with open("data.txt",mode="w",encoding="utf-8") as file:\n    file.write("4\\n6")\nsum=0\nwith open("data.txt",mode="r",encoding="utf-8") as file:\n    for line in file:\n        sum+=int(line)\nprint(sum)\n \n 隨機模組: random \n import random\n#隨機模組\ndata=random.choice([100,75,50,25,0])\n#內容隨機\nprint(data)\ndata1=random.sample([1,2,3,4,5,6],2)\n#內容隨機取多少\nprint(data1)\ndata2=[0,2,4,6,8,10,]\nrandom.shuffle(data2)\n#隨機換順序\nprint(data2)\ndata3=random.random()\n#0~1隨機\nprint(data3)\ndata4=random.uniform(60,100)\n#設定範圍\nprint(data4)\ndata5=random.normalvariate(100,10)\n#平均數100 標準差10 多數若在90~100之間\nprint(data5) \n 統計模組:\xa0statistics\xa0as\xa0stat \n import statistics as stat \n#統計模組\ndata=stat.mean([1,4,5,8])\n#平均值\nprint(data)\ndata1=stat.median([1,2,3,4,5,6,7,100])\n#常態分佈\nprint(data1)\ndata2=stat.stdev([1,2,3,4,5,6,7,8,100])\n#標準差\nprint(data2) \n 類別的定義與使用:\xa0 \n class test:\n#定義test\n    test1=["test2","test3"]\n    def read(test4):\n        print("read form",test4)\nprint(test.test1)\n#將word送到test4\ntest.read("word") \n 實體物件建立與使用: 抓取檔案 \n class file:\n    #初始化\n    def __init__(self,name):\n        self.name=name\n        self.file=None\n    #實體\n    def open(self):\n        self.file=open(self.name,mode="r",encoding="utf-8")\n    def read(self):\n        return self.file.read()\n#讀取\nf1=file("1.txt")\nf1.open()\ndata=f1.read()\nprint(data)  \n 類別的定義與使用:\xa0 \n class test:\n#定義test\n    test1=["test2","test3"]\n    def read(test4):\n        print("read form",test4)\nprint(test.test1)\n#將word送到test4\ntest.read("word") \n 實體物件建立與使用: 抓取檔案 \n class file:\n    #初始化\n    def __init__(self,name):\n        self.name=name\n        self.file=None\n    #實體\n    def open(self):\n        self.file=open(self.name,mode="r",encoding="utf-8")\n    def read(self):\n        return self.file.read()\n#讀取\nf1=file("1.txt")\nf1.open()\ndata=f1.read()\nprint(data)  \n', 'tags': '', 'url': '入門.html'}, {'title': '網路爬蟲', 'text': '網路連線、抓取資料: \n import urllib.request as request\n#網路連線\nweb="https://ecare.nfu.edu.tw/"\nwith request.urlopen(web) as response:\n    data=response.read().decode("utf-8")\n                         #轉"utf-8"\nwith open("school.txt","w",encoding="utf-8") as file:\n#創建檔案\n    file.write(data)\n    #寫入\nprint(data) \n \n 抓取json檔案且使用json處理 \n \n import urllib.request as request\n#網路連線\nimport json\n#json模組 處理資料\nweb="https://data.taipei/api/v1/dataset/296acfa2-5d93-4706-ad58-e83cc951863c?scope=resourceAquire"\nwith request.urlopen(web) as response:\n    data=json.load(response)\n    #取得資料\nclist=data["result"]["results"]\nwith open("data.txt","w",encoding="utf-8") as file:\n#創建檔案\n    for company in clist:\n        file.write(company["公司名稱"]+"\\n")\n        #寫入"公司名稱"且換行\n#取得"result" "results"資料\nprint(clist)\nfor company in clist:\n    print(company["公司名稱"]) \n    #抓取"公司名稱"資料 \n \n Html網頁--傳統 \n \n import urllib.request as req\nurl="https://zh.wikipedia.org/wiki/%E5%8F%B0%E7%81%A3%E6%9C%80%E5%A4%A7%E5%85%AC%E5%8F%B8%E5%88%97%E8%A1%A8"\nrequest=req.Request(url,headers={\n    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"\n})\n#讓網站認定是一個正常的使用者 "User-Agent" F12 Headers可以找到\nwith req.urlopen(request) as response:\n    data=response.read().decode("utf-8")\n#上傳這個資料\nimport bs4\n#解析原始碼\nroot=bs4.BeautifulSoup(data,"html.parser")\ntitles=root.find_all("td",align="left")\n#尋找 "td"\nfor title in titles:\n    if title.a !=None:\n#如果標籤包含a (沒有刪除)\n        print(title.a.string) \n \n cookie操作、抓取多個頁面 \n \n import urllib.request as req\ndef get(url):\n    request=req.Request(url,headers={\n        "cookie":"over18=1",\n        #讓網站確認符合規則(是否18歲)\n        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"\n    })\n    #讓網站認定是一個正常的使用者 "User-Agent" F12 Headers可以找到\n    with req.urlopen(request) as response:\n        data=response.read().decode("utf-8")\n    #上傳這個資料\n    import bs4\n    #解析原始碼\n    root=bs4.BeautifulSoup(data,"html.parser")\n    titles=root.find_all("div",class_="title")\n    print("page",count+1)\n    for title in titles:\n        if title.a != None:\n            print(title.a.string)\n    next=root.find("a",string="‹ 上頁")\n    return next["href"]\n    #把網址丟出去\npageurl="https://www.ptt.cc/bbs/Gossiping/index.html"\ncount=0\nwhile count<5:\n#抓5頁\n    pageurl="https://www.ptt.cc"+get(pageurl)\n    #執行新網頁\n    count+=1 \n \n JavaScript網頁--AJAX\xa0 \n \n import urllib.request as req\nurl="https://www.kkday.com/zh-tw/home/ajax_get_homepage_setting?csrf_token_name=141080c08072037e2cf75502d694d378"\nrequest=req.Request(url,headers={\n    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"\n})\n#讓網站認定是一個正常的使用者 "User-Agent" F12 Headers可以找到\nwith req.urlopen(request) as response:\n    data=response.read().decode("utf-8")\n#上傳這個資料\nimport json\n#解析 json格式\ndata=json.loads(data)\nposts=data["data"]["top_products"]["prod_list"]\nfor key in posts:\n    print(key["name"])\n\n \n \n 技術複雜的請求-- Request Data、Request Payload、Request Body \n \n import urllib.request as req\nimport json\nurl="https://medium.com/_/graphql"\nrequsetdata={"operationName":"ExtendedFeedQuery","variables":{"items":[{"postId":"6f87d6f613eb","topicId":""},{"postId":"1eead038c372","topicId":""},{"postId":"ec4123afad8f","topicId":""},{"postId":"389033f164c9","topicId":""},{"postId":"dd65342a833f","topicId":""},{"postId":"9988acde29dd","topicId":""},{"postId":"85e0053c9d3f","topicId":""},{"postId":"b5d46e086b25","topicId":""},{"postId":"ea9f39c7460f","topicId":""},{"postId":"63a511f03d26","topicId":""},{"postId":"377857311d79","topicId":""},{"postId":"96162c148aa9","topicId":""},{"postId":"2c32ceb782cf","topicId":""},{"postId":"368edf009a62","topicId":""},{"postId":"1011e50d31ae","topicId":""},{"postId":"23fcc8772bb3","topicId":""},{"postId":"64d7129fc066","topicId":""},{"postId":"596818712bb6","topicId":""},{"postId":"5316e9337ec4","topicId":""},{"postId":"f20b9367cd52","topicId":""}]},"query":"query ExtendedFeedQuery($items: [ExtendedFeedItemOptions!]!) {\\n  extendedFeedItems(items: $items) {\\n    post {\\n      ...PostListModulePostPreviewData\\n      __typename\\n    }\\n    metadata {\\n      topic {\\n        id\\n        name\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment PostListModulePostPreviewData on Post {\\n  id\\n  firstPublishedAt\\n  readingTime\\n  createdAt\\n  mediumUrl\\n  previewImage {\\n    id\\n    __typename\\n  }\\n  title\\n  collection {\\n    id\\n    domain\\n    slug\\n    name\\n    navItems {\\n      url\\n      __typename\\n    }\\n    logo {\\n      id\\n      __typename\\n    }\\n    avatar {\\n      id\\n      __typename\\n    }\\n    __typename\\n  }\\n  creator {\\n    id\\n    name\\n    username\\n    imageId\\n    mediumMemberAt\\n    ...userUrl_user\\n    __typename\\n  }\\n  visibility\\n  isProxyPost\\n  isLocked\\n  ...HomeFeedItem_post\\n  ...HomeReadingListItem_post\\n  ...HomeTrendingModule_post\\n  __typename\\n}\\n\\nfragment HomeFeedItem_post on Post {\\n  __typename\\n  id\\n  title\\n  firstPublishedAt\\n  mediumUrl\\n  collection {\\n    id\\n    name\\n    domain\\n    logo {\\n      id\\n      __typename\\n    }\\n    __typename\\n  }\\n  creator {\\n    id\\n    name\\n    username\\n    imageId\\n    mediumMemberAt\\n    __typename\\n  }\\n  previewImage {\\n    id\\n    __typename\\n  }\\n  previewContent {\\n    subtitle\\n    __typename\\n  }\\n  readingTime\\n  tags {\\n    ...TopicPill_tag\\n    __typename\\n  }\\n  ...BookmarkButton_post\\n  ...CreatorActionOverflowPopover_post\\n  ...PostPresentationTracker_post\\n  ...PostPreviewAvatar_post\\n}\\n\\nfragment TopicPill_tag on Tag {\\n  __typename\\n  id\\n  displayTitle\\n}\\n\\nfragment BookmarkButton_post on Post {\\n  ...SusiClickable_post\\n  ...WithSetReadingList_post\\n  ...AddToCatalogBookmarkButton_post\\n  __typename\\n  id\\n}\\n\\nfragment SusiClickable_post on Post {\\n  id\\n  mediumUrl\\n  ...SusiContainer_post\\n  __typename\\n}\\n\\nfragment SusiContainer_post on Post {\\n  id\\n  __typename\\n}\\n\\nfragment WithSetReadingList_post on Post {\\n  ...ReadingList_post\\n  __typename\\n  id\\n}\\n\\nfragment ReadingList_post on Post {\\n  __typename\\n  id\\n  viewerEdge {\\n    id\\n    readingList\\n    __typename\\n  }\\n}\\n\\nfragment AddToCatalogBookmarkButton_post on Post {\\n  ...AddToCatalogBase_post\\n  __typename\\n  id\\n}\\n\\nfragment AddToCatalogBase_post on Post {\\n  id\\n  viewerEdge {\\n    catalogsConnection {\\n      catalogsContainingThis(type: LISTS) {\\n        catalogId\\n        catalogItemIds\\n        __typename\\n      }\\n      predefinedContainingThis {\\n        catalogId\\n        predefined\\n        catalogItemIds\\n        __typename\\n      }\\n      __typename\\n    }\\n    ...editCatalogItemsMutation_postViewerEdge\\n    ...useAddItemToPredefinedCatalog_postViewerEdge\\n    __typename\\n    id\\n  }\\n  ...WithToggleInsideCatalog_post\\n  __typename\\n}\\n\\nfragment useAddItemToPredefinedCatalog_postViewerEdge on PostViewerEdge {\\n  id\\n  catalogsConnection {\\n    predefinedContainingThis {\\n      catalogId\\n      version\\n      predefined\\n      catalogItemIds\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment editCatalogItemsMutation_postViewerEdge on PostViewerEdge {\\n  id\\n  catalogsConnection {\\n    catalogsContainingThis(type: LISTS) {\\n      catalogId\\n      version\\n      catalogItemIds\\n      __typename\\n    }\\n    predefinedContainingThis {\\n      catalogId\\n      predefined\\n      version\\n      catalogItemIds\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment WithToggleInsideCatalog_post on Post {\\n  id\\n  viewerEdge {\\n    catalogsConnection {\\n      catalogsContainingThis(type: LISTS) {\\n        catalogId\\n        __typename\\n      }\\n      predefinedContainingThis {\\n        predefined\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n    id\\n  }\\n  __typename\\n}\\n\\nfragment CreatorActionOverflowPopover_post on Post {\\n  allowResponses\\n  id\\n  statusForCollection\\n  isLocked\\n  isPublished\\n  clapCount\\n  mediumUrl\\n  pinnedAt\\n  pinnedByCreatorAt\\n  curationEligibleAt\\n  mediumUrl\\n  responseDistribution\\n  visibility\\n  ...useIsPinnedInContext_post\\n  pendingCollection {\\n    id\\n    name\\n    creator {\\n      id\\n      __typename\\n    }\\n    avatar {\\n      id\\n      __typename\\n    }\\n    domain\\n    slug\\n    __typename\\n  }\\n  creator {\\n    id\\n    ...MutePopoverOptions_creator\\n    ...auroraHooks_publisher\\n    __typename\\n  }\\n  collection {\\n    id\\n    name\\n    creator {\\n      id\\n      __typename\\n    }\\n    avatar {\\n      id\\n      __typename\\n    }\\n    domain\\n    slug\\n    ...MutePopoverOptions_collection\\n    ...auroraHooks_publisher\\n    __typename\\n  }\\n  ...ClapMutation_post\\n  __typename\\n}\\n\\nfragment MutePopoverOptions_creator on User {\\n  id\\n  __typename\\n}\\n\\nfragment MutePopoverOptions_collection on Collection {\\n  id\\n  __typename\\n}\\n\\nfragment ClapMutation_post on Post {\\n  __typename\\n  id\\n  clapCount\\n  ...MultiVoteCount_post\\n}\\n\\nfragment MultiVoteCount_post on Post {\\n  id\\n  ...PostVotersNetwork_post\\n  __typename\\n}\\n\\nfragment PostVotersNetwork_post on Post {\\n  id\\n  voterCount\\n  recommenders {\\n    name\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment useIsPinnedInContext_post on Post {\\n  id\\n  collection {\\n    id\\n    __typename\\n  }\\n  pendingCollection {\\n    id\\n    __typename\\n  }\\n  pinnedAt\\n  pinnedByCreatorAt\\n  __typename\\n}\\n\\nfragment auroraHooks_publisher on Publisher {\\n  __typename\\n  ... on Collection {\\n    isAuroraEligible\\n    isAuroraVisible\\n    viewerEdge {\\n      id\\n      isEditor\\n      __typename\\n    }\\n    __typename\\n    id\\n  }\\n  ... on User {\\n    isAuroraVisible\\n    __typename\\n    id\\n  }\\n}\\n\\nfragment PostPresentationTracker_post on Post {\\n  id\\n  visibility\\n  previewContent {\\n    isFullContent\\n    __typename\\n  }\\n  collection {\\n    id\\n    slug\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment PostPreviewAvatar_post on Post {\\n  __typename\\n  id\\n  collection {\\n    id\\n    name\\n    ...CollectionAvatar_collection\\n    ...collectionUrl_collection\\n    __typename\\n  }\\n  creator {\\n    id\\n    username\\n    name\\n    ...UserAvatar_user\\n    ...userUrl_user\\n    __typename\\n  }\\n}\\n\\nfragment CollectionAvatar_collection on Collection {\\n  name\\n  avatar {\\n    id\\n    __typename\\n  }\\n  ...collectionUrl_collection\\n  __typename\\n  id\\n}\\n\\nfragment collectionUrl_collection on Collection {\\n  id\\n  domain\\n  slug\\n  __typename\\n}\\n\\nfragment UserAvatar_user on User {\\n  __typename\\n  username\\n  id\\n  name\\n  imageId\\n  mediumMemberAt\\n  ...userUrl_user\\n}\\n\\nfragment userUrl_user on User {\\n  __typename\\n  id\\n  customDomainState {\\n    live {\\n      domain\\n      __typename\\n    }\\n    __typename\\n  }\\n  username\\n  hasSubdomain\\n}\\n\\nfragment HomeReadingListItem_post on Post {\\n  id\\n  title\\n  creator {\\n    id\\n    name\\n    username\\n    ...UserAvatar_user\\n    __typename\\n  }\\n  mediumUrl\\n  createdAt\\n  readingTime\\n  collection {\\n    id\\n    name\\n    navItems {\\n      url\\n      __typename\\n    }\\n    ...CollectionAvatar_collection\\n    __typename\\n  }\\n  visibility\\n  __typename\\n}\\n\\nfragment HomeTrendingModule_post on Post {\\n  id\\n  ...HomeTrendingPostPreview_post\\n  __typename\\n}\\n\\nfragment HomeTrendingPostPreview_post on Post {\\n  id\\n  title\\n  mediumUrl\\n  readingTime\\n  firstPublishedAt\\n  ...PostPreviewAvatar_post\\n  ...PostPresentationTracker_post\\n  __typename\\n}\\n"}\n#複雜的請求 在Request Payload "view source" 可找到 給網站訊息\nrequest=req.Request(url,headers={\n        "Content-type":"application/json",\n        #在Request Headers\n        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"}, data=json.dumps(requsetdata).encode("utf-8"))\nwith req.urlopen(request) as response:\n        result=response.read().decode("utf-8")\nresult=json.loads(result)\ntitles=result["data"]["extendedFeedItems"]\nfor title in titles:\n#連續讀取\n        print(title["post"]["title"])\n \n', 'tags': '', 'url': '網路爬蟲.html'}, {'title': 'Email 發送電子郵件', 'text': 'import email.message\nmsg=email.message.EmailMessage()\nmsg["from"]="寄件人"\nmsg["to"]="收件人"\nmsg["subject"]="主旨"\nmsg.set_content("test")\n#msg 送出資訊與內容\nimport smtplib\n#到網路收尋 gmail.smtp server 或是其他 ex:yahoo...\nserver=smtplib.SMTP_SSL("smtp.gmail.com", 465)\nserver.login("帳號", "密碼")\n#填入帳號密碼登入\nserver.send_message(msg)\nserver.close \n \n', 'tags': '', 'url': 'Email 發送電子郵件.html'}, {'title': 'Flask 網站開發', 'text': '\n app.py \n \n from flask import Flask\napp = Flask(__name__)\n@app.route(\'/\')\ndef hello():\n    return \'hello man\'\n@app.route(\'/hi\')\ndef hi():\n    return \'Hi，\'\nif __name__ == \'main__\':\n app.run() \n \n \n runtime.txt \n \n python-3.7.11 \n \n requirements.txt \n \n Flask\ngunicorn \n \n Rrocfile \n \n web gunicorn app:app \n -------------------------------------------------------------------------------------------------- \n 可以部署到 Heroku or Github \n Heroku:\xa0 https://git.heroku.com/python-practice-learn.git \n \n 步驟: \n \n heroku login -i\n \n cd your-project \n git init\n \n heroku git:clone -a your_app_name \n git add . \n git commit -am "information" \n git push heroku master \n 部屬位於:  https://git.heroku.com/your-app-name.git 網址:  https://your-app-name.herokuapp.com/ \n \n 編輯: \n \n heroku login -i \n heroku git:clone -a your-app-name \n cd your-app-name \n git add . \n git commit -a "information"\n \n git push heroku master \n \n', 'tags': '', 'url': 'Flask 網站開發.html'}, {'title': 'Pandas 資料分析', 'text': '在計算機編程中，pandas是Python程式語言的用於數據操縱和分析的軟體庫。特別是，它提供操縱數值表格和時間序列的資料結構和運算操作。它是在三條款BSD許可證下發行的自由軟體。它的名字衍生自術語「面板數據」，這是計量經濟學的數據集術語，它們包括了對同一個體的在多個時期上的觀測。 \n -------------------------------------------------------------------------------------------------- \n 參考:\xa0 \n https://oranwind.org/python-pandas-ji-chu-jiao-xue/ \n https://www.youtube.com/watch?v=B5BgPWBZhvY&list=PL-g0fdC5RMboYEyt6QS2iLb_1m7QcgfHk&index=29 \n \xa0 \n', 'tags': '', 'url': 'Pandas 資料分析.html'}, {'title': 'Numpy', 'text': 'NumPy是Python語言的一個擴充程式庫。支援高階大量的維度陣列與矩陣運算，此外也針對陣列運算提供大量的數學函式函式庫。 \n -------------------------------------------------------------------------------------------------- \n', 'tags': '', 'url': 'Numpy.html'}, {'title': 'Html', 'text': '\n chat web on LKH on LKH \n \n \n <svg xmlns="http://www.w3.org/2000/svg" width="92" height="20"><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><mask id="a"><rect width="92" height="20" rx="3" fill="#fff"/></mask><g mask="url(#a)"><path fill="#555" d="M0 0h34v20H0z"/><path fill="#46BC99" d="M34 0h58v20H34z"/><path fill="url(#b)" d="M0 0h92v20H0z"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11"><text x="17" y="15" fill="#010101" fill-opacity=".3">chat</text><text x="17" y="14">web</text><text x="62" y="15" fill="#010101" fill-opacity=".3">on LKH</text><text x="62" y="14">on LKH</text></g></svg> \n \n \n                 LKH  Sorry, your browser does not support inline LKH.  \n <svg height="130" width="500">\n  <defs>\n    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">\n      <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />\n      <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />\n    </linearGradient>\n  </defs>\n  <ellipse cx="100" cy="70" rx="85" ry="55" fill="url(#grad1)" />\n  <text fill="#ffffff" font-size="45" font-family="Verdana" x="56" y="86"LKH</text>\n  Sorry, your browser does not support inline LKH.\n</svg> \n \n \n', 'tags': '', 'url': 'Html.html'}, {'title': 'Java', 'text': '', 'tags': '', 'url': 'Java.html'}, {'title': 'SQL', 'text': '', 'tags': '', 'url': 'SQL.html'}, {'title': 'C++', 'text': '', 'tags': '', 'url': 'C++.html'}, {'title': 'C#', 'text': '', 'tags': '', 'url': 'C#.html'}, {'title': 'Tensorflow', 'text': 'https://www.tensorflow.org/?hl=zh-tw', 'tags': '', 'url': 'Tensorflow.html'}]};