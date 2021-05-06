// question answer correctは最初は独立していたが、
// 途中で配列の中に組み込んだので、「配列中のquestion」「配列の中のanswer」というように書き換えないといけない

const quiz = [
    {
        question:'はねるしか使えないポケモンはどれ??',
        answers:['アチャモ',
                 'ラプラス',
                 'ジラーチ',
                 'コイキング'
                ],
        correct:'コイキング'
    },{
        question: '黄色い果物をくわえたごろねこはどれ？',
        answers:['みかん',
                 'ぶどう',
                 'いちご',
                 'オレンジ'
                ],
        correct: 'みかん'
    }
];


const quizLength = quiz.length;
// あとで++で使用する
let quizIndex = 0;
let score = 0;



const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;


//クイズの問題文、選択肢を定義
// JSは上から定義されていくので順番は守ろう！
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
// 出力は必ずする
setupQuiz();


// clickHundlerの名前は何でもよい（関数名）
const clickHundler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解！');
        score++;
    } else {
        window.alert('不正解！');
    }
// ２問目３問目と進ませる
    quizIndex++;
// quizIndex=クイズの数
    if(quizIndex < quizLength){
    // 問題数がまだあればこっちを実行
    setupQuiz();
    } else {
    window.alert('終了！正解数は' + score + '/' + quizLength + 'です！')
    // 問題数がなければこっちを実行
    }
};


// ボタン押した時のイベント
let handlerIndex = 0;
while(handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHundler(e);
    });
    handlerIndex++;
}
