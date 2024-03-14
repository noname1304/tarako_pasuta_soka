const before_text = document.getElementById("before_text");
const after_text = document.getElementById("after_text");
//テキスト変換関数   
function text_replace() {
    
//入力されたテキストを取得（letで宣言しよう）。 ..①
let text_value = before_text.value;
    
//テキストを変換 ..②
text_value = text_value.replace(/創価/g,"⬛︎⬛︎");
text_value = text_value.replace(/そうか/g,"⬛︎⬛︎⬛︎");
text_value = text_value.replace(/ソウカ/g,"⬛︎⬛︎⬛︎");
text_value = text_value.replace(/ｿｳｶ/g,"⬛︎⬛︎⬛︎");
text_value = text_value.replace(/soka/g,"⬛︎⬛︎⬛︎⬛︎");
text_value = text_value.replace(/Soka/g,"⬛︎⬛︎⬛︎⬛︎");
text_value = text_value.replace(/SOKA/g,"⬛︎⬛︎⬛︎⬛︎");
text_value = text_value.replace(/souka/g,"soukaじゃなくてsokaね");
text_value = text_value.replace(/Souka/g,"soukaじゃなくてSoukaね");
text_value = text_value.replace(/SOUKA/g,"SOUKAじゃなくてSOKAね");

//変換後のテキストエリアに表示 ..③
after_text.value = text_value;
}
