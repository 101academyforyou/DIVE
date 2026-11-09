# DIVE · IVE 學習島嶼

繁體中文互動學習島嶼：六個探索站、成員知識卡、音樂探索、韓語入門、舞台觀察、闖關集星與個人探索筆記。

## GitHub Pages

在儲存庫 Settings → Pages → Build and deployment → Source 選擇 GitHub Actions。之後每次推送到 main，工作流程會自動建置並發布。

預定網址：https://101academyforyou.github.io/DIVE/

## 本機建置

```sh
npm install
npm run build
python3 -m http.server 8080 --directory dist
```

開啟 http://localhost:8080 。部署使用相對路徑，支援 /DIVE/ 子目錄。

- src/App.tsx：站點資料、測驗、互動介面
- src/styles.css：桌面與手機樣式
- scripts/build.mjs：產生靜態網站
- .github/workflows/pages.yml：GitHub Pages 自動部署

筆記與星星僅保存在目前瀏覽器的 localStorage，不會上傳或跨裝置同步。清除網站資料會重設進度。

## 資料來源

- [IVE 官方成員介紹](https://ive-official.jp/mob/pageShw.php?site=DIVE&cd=profile)
- [STARSHIP 官方作品資料](https://www.starship-ent.com/musician/ive)
- [IVE 官方 YouTube](https://www.youtube.com/@IVEstarship)

非官方粉絲學習企劃，與 IVE、STARSHIP 無隸屬或代言關係。歌曲區為精選入門路線，並非完整或即時更新的作品年表。未使用成員照片、音檔或歌詞。
