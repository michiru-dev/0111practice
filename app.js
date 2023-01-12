//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", updateCheck);
filterOption.addEventListener("change", filterTodo);


// ①function = method　同義
// ②createElementをするとobjectが作られる
// ③element = objectとここでは覚える
// ④elementはhtmlの中の定義一つ一つ
// ⑤methodはobjectの入れ子構造のものもあるしそうでないのもある
// ⑥addEventListenerの時のfunctionのあとのパラメーターは必ずEVENT objectが渡されてくる
// ⑦propertyの中にpropertyも可能


//Functions
//todolistのアイテムを新規で追加
function addTodo(event) {

    //Prevent form from submitting（デフォルトの挙動をブロック）
    event.preventDefault();//eventがobjectだから.で呼び出す

    //Todo DIV ; createElementという既にあるmethodでdivを作成
    //createElementの中のpropertyは既に決まったものがある　その一つが"div"
    const todoDiv = document.createElement("div");
    //todoDivの中にはobjectが出来上がっていて（②参照）obejectの下のpropertyやmethodも自動生成されている
    todoDiv.classList.add("todo");//.classList.addでclass名（任意の名前）が加えられる

    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;//todoInputはquerySelectorで持ってきてるHTML.
    //今回の場合これがinput要素だからvalueというmethodがある    
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);//todoDiv(object)の中にappendChild（そのdiv要素の一段下に要素を作る）する

    //ADD TODO TO LOCALSTROAGE ※下にfunctionがある
    saveLocalTodos(todoInput.value);

    //CHECK MARK BUTTON
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';//上記で作成した既存のボタンのhtmlにアイコンを代入
    completedButton.classList.add("complete-btn");//.classList.addでclass名（任意の名前）が加えられる
    todoDiv.appendChild(completedButton);
    //CHECK trash BUTTON
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //APPEND TO LIST
    todoList.appendChild(todoDiv);//todoDivにくっついてきてる要素とか全部todoListにappendする

    //Clear Todo INPUT VALUE //上の今入力してた箱の中身を消す
    todoInput.value = ""
}



function saveLocalTodos(todo) {
    let todosList;
    if (localStorage.getItem("todos") === null) {    //key("todos") = property名
        todosList = [];//[]配列で中身がないので初期化を意味する
    } else {
        todosList = JSON.parse(localStorage.getItem("todos"));//json.parseは変換されたデータをjavascript上で読めるようにする
    }
    todosList.push(todo);//配列に追加する
    localStorage.setItem("todos", JSON.stringify(todosList));//json.すとりんぐふぁいはデータを変換して保存できるようにする
    //setItem 新しいデータor既存のデータをlocalstorageに保存する

    //"todos"はこの上の行で定義して呼び出し元を決めている
}

//                   JSON.stringify(data)変換
//                       =======>
// Browser(Chromeとか)              LocalStorage
//                       <=======
//                   JSON.parse(data)変換

function updateCheck(e) {//このパラメーターはaddeventlistenerだから
    //勝手にクリックされたところの情報を持ってきてくれる(この情報は大量)
    const item = e.target;//そのeの大量の情報の中のエレメント情報へのアクセスは.target
    //DELETE TODO
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;//target objectも元々あるやつでその中にparentElementも存在するここではtodoDiv
        //Animation
        todo.classList.add("fall");//todoDivにfallというclass名を追加
        removeLocalTodos(todo);//ローカルストレージからデータを削除？？？
        todo.addEventListener("transitionend", function () {//transitionendはトランジション（cssのアニメーション）が終わったら〜
            todo.remove();//コールバック関数で見た目からデータを削除
        });
    }

    //CHECK MARK
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;//todoDiv
        todo.classList.toggle("completed");//toggleは（）内にon/offしたいクラス名を入れる
    }
}

function filterTodo(e) {//このパラメーターはaddeventlistenerから来てるから勝手にいろんな値を持ってきてくれる
    const todos = todoList.childNodes;//NodesはelementなのでtodoListの下にあるエレメント

    // const todos = [todo1, todo2, todo3, todo4.....]
    console.log(todos)

    todos.forEach(//配列のデータを左から一つ一つみていく
        function (todo) {//ここのパラメーターはforEach前の配列の値一つが自動で入るそういうルール
            console.log(todo)
            switch (e.target.value) {//色んな情報が入ってるeにどんどんアクセスしていく　今回はfilter.todo
                case "all"://optionが持つvalueのことhtml参照
                    todo.style.display = "flex";
                    break;//見つかったらしたのはスキップ
                case "completed"://filteroptionのcompletedがクリックされました
                    if (todo.classList.contains("completed")) {//completedのクラス名だったら〜
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "uncompleted":
                    if (!todo.classList.contains("completed")) {//！マークは逆
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
            }
        }
    );
}
//saveしてたデータがあれば呼び出してくる
function getTodos() {
    //CHECK---HEY Do I already have thing in there?
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
        // todos = ["a","d","f"]
    }

    todos.forEach(function (todoFromLocalStorage) {//forEachのパラメーターは必ずforEach前の配列の値が入る
        //Todo DIV
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        //Create LI
        const newTodo = document.createElement("li");
        newTodo.innerText = todoFromLocalStorage;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        //CHECK MARK BUTTON
        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);
        //CHECK trash BUTTON
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
        //APPEND TO LIST
        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo) {
    //CHECK---HEY Do I already have thing in there?
    let todos;
    if (localStorage.getItem("todos") === null) {//localStorageは元々あるやつ
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
        // todos = ["serwe","werwe","qweqw","feswe"]
    }
    const todoIndex = todo.children[0].innerText;//childrenは入れ子
    // todoIndex = "qweqw"
    todos.splice(todos.indexOf(todoIndex), 1);
    // todos.indexOf(todoIndex) == 2
    // todos.splice(todos.indexOf(todoIndex), 1); == ["serwe","werwe","feswe"]
    // indexOfはそのパラメーターと同じ値を配列から探してそれが何番目か返してくれる
    // spliceはパラメーターのとこの数を消す
    localStorage.setItem("todos", JSON.stringify(todos));//新しいデータor既存のデータをlocalstorageに保存する
}


//                   JSON.stringify(data)変換
//                       =======>
// Browser(Chromeとか)              LocalStorage
//                       <=======
//                   JSON.parse(data)変換

// const array = [];
// const object = {
//     a: '',
//     b: '',
//     c: '',
// };
// const variable = '';


// const _localStorage = {
//     todos: ["serwe", "werwe", "qweqw", "feswe"],
//     family: ["soma", "michiru", "hoko"]
// }

// _localStorage.todos
// _localStorage['todos']

// function getItem(key) {
//     return _localStorage[key]
// }

// const itemReturned = getItem("todos");

// console.log(itemReturned);

// function setItem(key, dataToSave) {
//     _localStorage[key] = dataToSave;
// }

// setItem('todos', ['as', 'sss']);

// console.log(_localStorage)

    // ①Object
    //  ②property
    //     ③propertyの中の値はobjectの場合もある
    //     ③ただの値（変数）
    //     ③array
    //  ②method
    // ①array
