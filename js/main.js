let IntervalId1 ;
let IntervalId2 ;
let IntervalId3 ;
let bool1 = true;
let bool2 = true;
let bool3 = true;


const bingo = document.querySelector('.bingo');
const start = document.querySelector('.start');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const stop1 = document.querySelector('.stop1');
const stop2 = document.querySelector('.stop2');
const stop3 = document.querySelector('.stop3');

// スタートボタンをクリックしたら
start.addEventListener('click',function(){
    // 一つ一つに10msごとに画像をランダムに切り替える
    // classListが付与されていたら取り除く処理
    img1.classList.remove('inview');
    img2.classList.remove('inview');
    img3.classList.remove('inview');
    bingo.textContent = '';
        // 一つ目の画像(左)
        if(bool1){
            function randomImg1(){
                IntervalId1 = setTimeout(function(){
                    const num = Math.floor(Math.random() * 3) + 3;
                    img1.src = 'img/img'+num+'.jpeg';
                    randomImg1();
                },10);
            }
            randomImg1();
            bool1 = false;
        }
        // 二つ目の画像(中央)
        if(bool2){
            function randomImg2(){
                IntervalId2 = setTimeout(function(){
                    const num = Math.floor(Math.random() * 3) + 3;
                    img2.src = 'img/img'+num+'.jpeg';
                    randomImg2();
                },10);
            }
            randomImg2();
            bool2 = false;
        }
        // 三つ目の画像(右)
        if(bool3){
            function randomImg3(){
                IntervalId3 = setTimeout(function(){
                    const num = Math.floor(Math.random() * 3) + 3;
                    img3.src = 'img/img'+num+'.jpeg';
                    randomImg3();
                },10);
            }
            randomImg3();
            bool3 = false;
        }
});

// ストップボタンがクリックされたら
stop1.addEventListener('click',function(){
    clearInterval(IntervalId1);
    bool1 = true;
});

stop2.addEventListener('click',function(){
    clearInterval(IntervalId2);
    bool2 = true;
});

stop3.addEventListener('click',function(){
    clearInterval(IntervalId3);
    bool3 = true;
    // 画像が同じものがあったらinviewを付与
    if(bool1 && bool2 && bool3){
        if((img1.src === img2.src) && (img1.src === img3.src)){
            bingo.textContent = 'HIT!!';
        }else if(img1.src === img2.src){
            img3.classList.add('inview');
        }else if(img1.src === img3.src){
            img2.classList.add('inview');
        }else if(img2.src === img3.src){
            img1.classList.add('inview');
        }else{
            img1.classList.add('inview');
            img2.classList.add('inview');
            img3.classList.add('inview');
        }
        
    }
});
