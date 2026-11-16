/*alert('はじめてのJavaScript');
console.log('はじめてのコンソール');*/

/*const,let棟の変数宣言*/

/* varの変数宣言 */
var val1 = "val変数";
console.log(val1);

//var変数は上書き可能！
val1 = "var変数を上書き";
console.log(val1);

//var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);

/* letの変数宣言 */
let val2 = "let変数";
console.log(val2);

// letは上書き可能
val2 = "let変数を上書き";
console.log(val2);

// letは再宣言不可能
// ↓エラーが発生する
// let val2 = "let変数を再宣言";

/* constの変数宣言 */
const val3 = "const変数";
console.log(val3);

// constは上書き不可
// ↓エラーが発生する
// val3 = "const変数を上書き";

// constは再宣言不可能
// ↓エラーが発生する
// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
    name: "名前",
    age: 100
};
console.log(val4);

val4.name = "user";
val4.age = "9999";
val4.address = "Japan";
console.log(val4);

// constで定義した配列はプロパティの変更が可能
const val5 = ["dog","cat"];
console.log(val5);

val5[0] = "bird";
console.log(val5);

val5.push("monkey");
console.log(val5);

val5.push(100);
console.log(val5);