これはこのプロジェクトの概要で、関係ない

JavaScriptファイルの作成とHTMLファイルとの組み合わせ方について説明します。
テキストエディタを開きます。
新規ファイルを作成し、拡張子を「.js」として保存します。例えば「script.js」のように名付けます
ファイル内にJavaScriptコードを記述します。

HTMLファイルとの組み合わせ方
JavaScriptファイルをHTMLファイルと組み合わせるには、主に以下の2つの方法があります:
1. scriptタグのsrc属性を使用する方法
HTMLファイルの<head>セクションまたは</body>タグの直前に以下のように記述します5:
xml
<script src="script.js"></script>

この方法は、大規模なプロジェクトや複数のページで同じスクリプトを使用する場合に適しています5。
2. HTMLファイル内に直接記述する方法
小規模なスクリプトや特定のページでのみ使用するスクリプトの場合、HTMLファイル内に直接JavaScriptを記述することもできます

完全なHTMLファイルの例
以下は、外部JavaScriptファイルを使用した完全なHTMLファイルの例です5:
xml
<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>JavaScriptの例</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <button onclick="sayHello()">クリック</button>
    <script src="js/script.js"></script>
</body>
</html>

この例では、script.jsファイルがjsディレクトリ内にあると仮定しています。ボタンをクリックすると、script.js内で定義されたsayHello()関数が呼び出されます15。
JavaScriptファイルを外部ファイルとして保存することで、コードの再利用性が高まり、HTMLファイルとJavaScriptコードを分離することができます。これにより、コードの管理や保守が容易になります5。




