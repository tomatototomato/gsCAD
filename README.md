# ① 課題番号３　課題：メモ帳アプリ

作品名：線図描画アプリ

## ② 課題内容（どんな作品か）

- LocalStorage を使えば、ブラウザ上で絵を描けるのではないかと思い、挑戦してみました。
  当初はＣＡＤソフトのようなものを作ろうかと思いましたが、ロジックの実装にめちゃくちゃ苦戦して、
  結局一筆書きの線図の描画するところまでしかできなかった。なお、バグ多数。

- 仕組みとしては、LocalStorage にマウスをクリックした座標を記憶させ、
  　 CreateJS というものを使って、線図を描画させています。

- 描画ごとに LocalStorage に記憶するので、誤ってブラウザを閉じてしまっても、続きから書き始められます。

## ③DEMO

https://tomatototomato.github.io/gsCAD/

## ④ 作ったアプリケーション用の ID または Password がある場合

- 設定なし

## ⑤ 工夫した点・こだわった点

- LocalStorage の Key は数字の連番にし、Key の数字を描画順と紐づけたこと。
- LocalStorage の Value は 2 次元配列を記憶させたこと。
- フレームワーク「CreateJS」を利用してみたこと。

## ⑥ 難しかった点・次回トライしたいこと(又は機能)

- ブラウザの表示画面が変わってもなるべくレイアウト変わらないように実装したが、おそらくスマホ対応はできていない。
  　レスポンシブデザインのやり方をもう少し学ぼうと思います。
- 当初考えていたロジックがうまくいかず、二転三転した結果、自分でも解読が難しいコードが出来上がってしまいました。
  　その状態に陥ってしまうとバグがバグを呼び、どんどん悪化する一方になるということに気づかされました。GitHub もあまり　有効的に使えていなかったりもしたので、そのあたりも反省して次に臨もうと思います。

## ⑦ 質問・疑問・感想、シェアしたいこと等なんでも

- [感想]

成果物としては、微妙な形となってしまいましたが、
非常に学びがあった課題になったと思います。もうじきバックエンドの学習内容もはいってくるかと思いますので
引き続き頑張っていきたいと思います。

- [参考記事]
  - 1. [https://ics.media/tutorial-createjs/]
