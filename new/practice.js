// question
const studentInfo = {
    fullName: "",
    grade: null,
    totalScore: null,
    candy: null
};
// get student fullname
function getFullName(firstName, lastName) {
    1 + 1;
    return firstName + lastName;
}
// get student grade based on student's age
function getGrade(age) {
    if (age === 13) {
        // grade should be 1
        return 1
    }
    if (age === 14) {
        // grade should be 2
        return 2
    }
    // grade should ne 3
    return 3
}
// get student score detail
function getTotalScore(score1, score2, score3) {
    // return total score here
    return (score1 + score2 + score3)
}


// get candies for student based on student's total score
function getCandies(forGetCandies) {
    // if score is more than 90, return 10
    if (forGetCandies > 90) {
        return 10;
    }
    // if score is more than 70, return 8
    if (forGetCandies > 70) {
        return 8;
    }
    // if score is more than 40, return 5
    if (forGetCandies > 40) {
        return 5;
    }
    // if score is below 20, return 0
    if (forGetCandies < 20) {
        return 0;
    }
}
// You can pass parameter which is a result of getTotalScore
// function... <- 自分で書く
// ===============
// Student 1
const firstName = 'Jason';
const lastName = 'baker';
const age = 13;
const score1 = 12;
const score2 = 44;
const score3 = 28;

const TotalScore = getTotalScore(score1, score2, score3)

const student1 = {
    fullName: getFullName(firstName, lastName),
    grade: getGrade(age),
    totalScore: TotalScore,
    candy: getCandies(TotalScore)

}
console.log(student1.fullName)
console.log(student1.grade)
console.log(student1.totalScore)
console.log(student1.candy)




// Student 2
const firstName2 = 'Thomas';
const lastName2 = 'Nicoras';
const age2 = 13;
const score1_2 = 12;
const score2_2 = 44;
const score3_2 = 28;

const totalScore2 = getTotalScore(score1_2, score2_2, score3_2)
const student2 = {
    fullName: getFullName(firstName2, lastName2),
    grade: getGrade(age2),
    totalScore: totalScore2,
    candy: getCandies(totalScore2),
    skillLevel: {
        English: {
            grammer: 1,
            vacablary: 2,
        },
        Japanese: 2,
        French: 4,
        Sports: ["Soccer", "BasketBall"],
    },
    country: ["Japan", "Spain", "Greece", "NetherLand", "Canada"],
    kpop: ["twice", "newjeans", "ive"]
}

const michiru = "みちる"

const str = 'a'
const num = 1
const obj = {} //この括弧自体がオブジェクト　その中身はプロパティ
const arr = []
const arr12 = [michiru, "a", 1]//(一番最初のmichiruは変数)

console.log(student2.fullName)
console.log(student2.grade)
console.log(student2.totalScore)
console.log(student2.candy)
console.log(student2.skillLevel.English)
console.log(student2.skillLevel.English.grammer)
console.log(student2.country[2])
console.log(student2.country[4])
console.log(student2.country)
console.log(student2.skillLevel.Sports)
student2.country.forEach(
    function (a) { console.log(a) }
)
student2.kpop.forEach(
    function (a) { console.log(a) }
)


//functionを定義してforEachで渡すのが次の課題

function practice(s) {
    console.log(s)
    return "haha"
};

practice('hey') // hey
const result = practice('hey');
console.log(result);// haha


student2.country.forEach(practice);

//=====================================

const objjj = {
    meal: 'steak'
};

const a = 1;
const b = 2

const arr1 = [a, b, 4]

const student3 = {
    sports: ['1', '2', '3', '4',
        {
            test: 'sfsdyf',
        },
        {
            place: 'canada',
            arr1: arr1,
        }
    ],
    ss: {
        some: ['s', 'a', 'ss'],
        te: objjj,
    },
    as: practice
}

console.log(objjj.meal);
console.log(a);
console.log(b);
console.log(arr1);
console.log(student3.sports);
console.log(student3.sports[4].test);
console.log(student3.ss.some);
console.log(student3.ss.te);
console.log(student3.ss.te.meal);
student3.as('hey') // hey
const res = student3.as('hey');
console.log(res);// haha


arr1.forEach(
    function (a) { console.log(a) }
);

student3.sports.forEach(
    function (a) { console.log(a) }
);
//forEachでconsolelogの中身を全て表示させる
//ifが必要

// const a0 = '1';
// const a1 = '2';
// const a2 = '3';
// const a3 = '4';
// const a4 = {
//     test: 'sfsdyf',
// };
// const a5 = {
//     place: 'canada',
//     arr1: arr1,
// };
console.log('=======')

student3.sports.forEach(
    function (a) {
        if (a.test !== undefined) {
            console.log(a.test)
        }
        else if (a.place !== undefined) {
            console.log(a.place)
        }
        else {
            console.log(a)
        }


        if (a.arr1 !== undefined) {
            a.arr1.forEach(function (b) { console.log(b) })
        }
    }
);
console.log('=======')


student3.ss.some.forEach(
    function (a) { console.log(a) }
);


//==========================================================
const student4 = {
    sports: [
        '1',
        '2',
        [
            'a',
            'b',
            'c'
        ],
        {
            place: 'canada',
        },
        {
            ss1: 'ss1 property',
            ss2: 'ss2 property',
            ss3Fn: function () { console.log('good') },
            ss4Fn: function (arg) { console.log(arg) },
        },
        {
            test: {
                aaa: 'aaa property',
                fn1: function () { console.log('heeloooo') },
                fn2: function (arg) { console.log(arg, '<- arg') }
            },
        }
    ],
    as: practice2
}

function practice2(s) {
    return "heelllooo"
};

student4.sports.forEach(
    function (a) {

        console.log(s)

        if (Array.isArray(a)) {
            a.forEach(//aはsportsではなくsportsの中の１個のデータ
                function (b) { console.log(b) });
        }
        else if (typeof a === 'object') {
            if (a.place !== undefined) {
                console.log(a.place)
            }
            if (a.ss1 !== undefined) {
                console.log(a.ss1)
            }
            if (a.ss2 !== undefined) {
                console.log(a.ss2)
            }
            if (a.ss3Fn !== undefined) {
                a.ss3Fn()
            }

            if (a.ss4Fn !== undefined) {
                a.ss4Fn("arg")
            }

            if (
                a.test !== undefined
                && typeof a.test === 'object'
                && a.test.aaa !== undefined
            ) {
                console.log(a.test.aaa)
            }
            if (a.test !== undefined && a.test.fn1 !== undefined) {
                a.test.fn1()
            }
            if (a.test !== undefined && a.test.fn2 !== undefined) {
                a.test.fn2("arg")
            }
        }
        else {
            console.log(a)
        }



    }

);

student4.as("s")
const temp = student4.as() //functionの時はreturnがない限りに何も箱には入らない
//returnの値しか入らない
console.log(temp)
