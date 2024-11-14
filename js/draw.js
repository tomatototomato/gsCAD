
//起動時、画面の初期化-------------------------
window.addEventListener("load", init);

//線を描画------------------------------------
var stage = new createjs.Stage("myCanvas");

    // タッチイベントが有効なブラウザの場合、
    // CreateJSでタッチイベントを扱えるようにする
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }

    //イベント監視（マウスがクリックされたとき、handleDownが動く）
    stage.addEventListener("stagemousedown", handleDown);

    function handleDown(event) {

        let joinArray = [];
        drawCount = localStorage.length + 1; 
        
        //canvas上でクリックされたときにマウス座標を取得
        var mousedown_point = [event.stageX, event.stageY];
        console.log(mousedown_point);

        localStorage.setItem(drawCount, mousedown_point);
        drawCount++;


        for (let i = 1; i < localStorage.length + 1; i = i+2) {
        joinArray.push(storeStorage(i));
        console.log(joinArray);
        }

        // Stageオブジェクトを作成。表示リストのルートになります。
        var stage = new createjs.Stage("myCanvas");

        // 描画をするためのシェイプを作成
        var shape = new createjs.Shape();

        // シェイプをステージに配置
        stage.addChild(shape);

        // 線のスタイルを設定
        shape.graphics.beginStroke("black"); // 黒色で線の描画を開始

        // 始点を指定
        shape.graphics.moveTo(joinArray[1][2], joinArray[1][3]);// 描画開始位置を指定

        for(j = 1; j<joinArray.length; j++){
        shape.graphics.lineTo(joinArray[j][4], joinArray[j][5]);// 線の終了位置を指定
        }

        stage.update(); // Stageの描画を更新

    }

//LocalStorageに値があるかを判定
//値がなければグローバル変数drawCountを初期化
function init() {

    if(localStorage.getItem("1") === null){
        console.log("値が入っていません。");

        //drawCountを初期化
        drawCount = 1;
        console.log(drawCount);
    }else{
        console.log("値が入っています。");

        //localStrage.lengthでデータ格納数を取得し、drawCountに格納
        drawCount = localStorage.length + 1; 
        console.log(drawCount);
    }
}

// ボタン押下------------------------------------------
//フリーハンドで描画
$("#freedraw_btn").on("click", function () {
    // Stageオブジェクトを作成。表示リストのルートになります。
    var stage = new createjs.Stage("myCanvas");

    // タッチイベントが有効なブラウザの場合、
    // CreateJSでタッチイベントを扱えるようにする
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }

    var shape = new createjs.Shape(); // シェイプを作成
    stage.addChild(shape); // ステージに配置

    // ステージ上でマウスボタンを押した時のイベント設定
    stage.addEventListener("stagemousedown", handleDown);

    // マウスを押した時に実行される
    function handleDown(event) {
        // 線の描画を開始
        shape.graphics
            .beginStroke("black") // 青色で、描画を開始

        console.log(event.stageX);
        console.log(event.stageY);

        shape.graphics.moveTo(event.stageX, event.stageY) // 描画開始位置を指定

        // ステージ上でマウスを動かした時と離した時のイベント設定
        stage.addEventListener("stagemousemove", handleMove);
        stage.addEventListener("stagemouseup", handleUp);
    }

    // マウスが動いた時に実行する
    function handleMove(event) {
        // マウス座標への線を引く
        shape.graphics
            .lineTo(event.stageX, event.stageY);
    }

    // マウスボタンが離された時に実行される
    function handleUp(event) {
        // マウス座標への線を引く
        shape.graphics
            .lineTo(event.stageX, event.stageY);

        // 線の描画を終了する
        shape.graphics.endStroke();

        // イベント解除
        stage.removeEventListener("stagemousemove", handleMove);
        stage.removeEventListener("stagemouseup", handleUp);
    }

    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", onTick);
    function onTick() {
        stage.update(); // Stageの描画を更新
    }
});


//消去消去
$("#erase_btn").on("click", function () {
    
    localStorage.clear();
    
    // ステージを作成
    var stage = new createjs.Stage("myCanvas");
    // 画面を更新する
    stage.update();
    // カウントを初期化
    drawCount = 1;

});


//型変換-----------------------------------------
//文字型をString型からFloat型へ
function convert_StringToFloat(values) { 
    let split_values = values.split(','); 
    return split_values;
}

//ロジック部分-------------------------------------------------------------------

//座標取得------------------------------------------
//キャンバス上でマウスクリックした時 座標を取得しLocalStorageに保存
// function get_stagemousedowm_point() {

//     var stage = new createjs.Stage("myCanvas");

//     // タッチイベントが有効なブラウザの場合、
//     // CreateJSでタッチイベントを扱えるようにする
//     if (createjs.Touch.isSupported()) {
//         createjs.Touch.enable(stage);
//     }

//     stage.addEventListener("stagemousedown", handleDown);

//     function handleDown(event) {
//         var mousedown_point = [event.stageX, event.stageY];
//         console.log(mousedown_point);

//         localStorage.setItem(drawCount, mousedown_point);
//         drawCount++;
//     }
// }


//ストレージを配列に格納
function storeStorage(i){

    joinArray = [[]];

    const startPoint = localStorage.getItem(i);
    const endPoint = localStorage.getItem(i+1);

    let lineArray = [
        i,i+1,
        convert_StringToFloat(startPoint)[0],convert_StringToFloat(startPoint)[1],
        convert_StringToFloat(endPoint)[0],convert_StringToFloat(endPoint)[1]
    ];

    return lineArray;
}