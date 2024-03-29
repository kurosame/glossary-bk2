## category

other

## titles

Hypertext Transfer Protocol
HTTP
HTTP/2
HTTP/3

## description

### TCP/IP 階層モデル

- ネットワークインタフェース層  
  物理的なケーブルやネットワークアダプタに相当する部分

- インターネット層  
  ネットワークでデータを実際にやり取りする部分  
  IP（Internet Protocol）が相当する  
  データの送信のみ保証して、受信されるかどうかは保証しない

- トランスポート層  
  IP が保証しなかったデータの転送を保証する  
  TCP（Transmission Control Protocol）が相当する  
  TCP で接続したコネクションで転送するデータが、どのアプリケーションに渡るかを決定するのがポート番号

- アプリケーション層  
  メールや DNS、HTTP といった具体的なインターネットアプリケーションを実現する部分  
  接続、送信、受信、切断などの基本的な機能を備えている Socket というライブラリを使うのが一般的

### HTTP/1.1

現在支配的に使われている  
TCP コネクション内でリクエストとレスポンスが 1 つずつしか接続できない  
同時に複数リクエストを投げた場合、リクエストされた順にレスポンスされる  
ほとんどのモダンブラウザで TCP コネクションを同時に接続出来る数は 6 つ

### HTTP/2

HTTP/1.1 より Web パフォーマンスを向上している  
Google が Web の表示を高速化するために開発したプロトコルである SPDY(スピーディ)をベースとしている  
1 つの TCP コネクション接続上で複数のリクエストを並行処理できる  
つまり複数リクエストを投げた場合、処理がリクエスト順ではなく、並行に処理され終わった順にレスポンスが返ってくる  
ストリームという仮想的なパイプを用意して、ストリーム ID という識別子を使う  
これにより並行処理を行っても、同一のストリーム ID によりどの通信かを識別できる

やり取りの実体はフレームになり、このフレームにストリーム ID が埋め込まれている  
HTTP/2 におけるリクエスト・レスポンス・ヘッダー情報などはすべてフレームとして送受信される

フレームのタイプは 10 種類定義されている（DATA, HEADERS など）

### HTTP/3

トランスポート層で TCP ではなく、UDP をベースとして開発された QUIC（Quick UDP Internet Connections）プロトコル上で HTTP を動かす仕様

- UDP - User Datagram Protocol  
  TCP の three-way handshaking のような接続の確立を行わないので、信頼性に欠けるが、シンプルで速いプロトコル
