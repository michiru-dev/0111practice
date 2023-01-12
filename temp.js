/*
Q1.オブジェクトの間違った情報を修正
const obj = {
  michiru: {
    age: 45,
    gender: "male",
  },
  soma: {
    age: 18,
    gender: "femail",
  },
  hokori: {
    age: 1,
    gender: "male",
  },
};

Q1-2 (余裕だったら)
objをループしてmichiru、soma、hokoriのageのうち、26歳以上かつ27歳以内のものはconsole.log('一番偉い')を表示
*/

const obj = {
  michiru: {
    age: 45,
    gender: "male",
  },
  soma: {
    age: 18,
    gender: "femail",
  },
  hokori: {
    age: 1,
    gender: "male",
  },
};
obj.michiru.age = 28
obj.michiru.gender = "female"
obj.soma.age = 27
obj.soma.gender = "man"
obj.hokori.age = 3
obj.hokori.gender = "girl"

// obj["michiru"]
// let key = "soma"
// console.log(obj[key])
// key = "michiru"
// console.log(obj[key])
// console.log(obj.michiru)

Object.keys(obj).forEach( //object専用のkeys。()内のオブジェクトを配列として認識
  function (a) {//(a)はkeyのこと。ここではmichiru,soma,hokori
    // console.log(obj[a].age)
    if (obj[a].age > 26 && obj[a].age < 28) {
      console.log(a + 'が今日の夕飯作る')
    }
  }
)



/*
Q2.１００のデータを持つ配列を作る
＊ヒント for を使う
  [
    {
      name: なんでもOKでも他のオブジェクトとは違う名前,
      age: ランダムな番号(0~100),
      displayName: nameをconsole.logで表示する関数　＜＝　難しかったらこれは抜きでもOK
    },
    {
      name: なんでもOKでも他のオブジェクトとは違う名前,
      age: ランダムな番号(0~100),
      displayName: nameをconsole.logで表示する関数　＜＝　難しかったらこれは抜きでもOK
    },
    ...
  ]
*/

// const michiru = {
//   name: "michiru",
//   age: 1,
//   //displayName: nameをconsole.logで表示する関数　＜＝　難しかったらこれは抜きでもOK
// }
// const arr = []
// arr.push(michiru)


// const michiru2 = {
//   name: "michiru2",
//   age: 12,
//   //displayName: nameをconsole.logで表示する関数　＜＝　難しかったらこれは抜きでもOK
// }

// arr.push(michiru2)


const arr = []//空の箱(array)を作る
for (let i = 0; i < 100; i++) { //i++はiプラス1ということ
  const o = {
    name: "michiru" + i,
    age: i,
    //displayName: nameをconsole.logで表示する関数　＜＝　難しかったらこれは抜きでもOK
  }
  arr.push(o) //arrにoを追加する(空の箱(配列)にo(オブジェクト)を追加する)
}
console.log(arr)


//filterを使って二の倍数のデータ位置を抜き出す
const 二の倍数インデックス = arr.filter(function (value, index) {
  return index % 2 === 0;
}
)
console.log(二の倍数インデックス)



const 三の倍数 = []
arr.forEach(
  function (c) {
    if (c.age % 3 === 0) {
      三の倍数.push(c)
    }
  }
)
console.log(三の倍数)






// for (let i = 0; i < 100; i++) 
//     (初期値　　; 条件　　; 初期値を増減する式) {繰り返しの処理}

const 空の配列の箱 = []
for (let i = 0; i < 100; i++) {
  const オブジェクト = {
    name: "michiru" + i,
    age: i,
  }
  空の配列の箱.push(オブジェクト)
}

// Q2-1. データを持つ配列を作る
// 配列を二つ（arrOdd, arrEven）作り、idが偶数の場合はarrEvenにidが奇数の場合はarrOddにデータ（obj）をいれる
// arrOdd, arrEvenそれぞれのlengthは50
// データ（obj）の構造
// {
//   id: 数字(i)
//   name: なんでもOKでも他のオブジェクトとは違う名前,
// }
const arrOdd = []
const arrEven = []
for (let i = 0; i < 100; i++) {
  const ob = {
    id: i,
    name: "soma" + i,
  }
  if (i % 2 === 0) {
    arrEven.push(ob)
  } else {
    arrOdd.push(ob)
  }
}
console.log(arrEven[0])
console.log(arrOdd)
console.log(arrEven.length) //array（配列）だとなった瞬間lengthという長さを測るプロパティが使えるようになる
console.log(arrOdd.length)

arrEven.forEach(
  function (b) {
    b.name = b.name + 1
    console.log(b.name)
  }
)

const nameObj = {
  1: 'michiru',
  2: 'soma',
  3: 'hokori'
}

// ['1', '2', '3', ['1', '2', '3']]
const lastPractice = []
for (let i = 1; i < 5; i++) {
  if (i === 4) {
    const mm = []
    for (let ii = 1; ii < 4; ii++) {
      // const pp = ii.toString()
      const nn = nameObj[ii]
      mm.push(nn)
    }
    lastPractice.push(mm)
  } else {
    const lp = i.toString()
    lastPractice.push(lp)
  }
}

// obj["michiru"]
// let key = "soma"
// console.log(obj[key])
// key = "michiru"
// console.log(obj[key])
// console.log(obj.michiru)



//lastPractice[3] = Object.values(nameObj)

console.log(lastPractice)



/*
Q3.↓を作る関数を作成＋console.logで表示
            *
           * *
          *   *
         *     *
        ********* 
*/
