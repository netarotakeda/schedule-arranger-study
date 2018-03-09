(function () {
    'use strict';
    const tweetDivided = document.getElementById('tweet-areas');

    /**
    * 指定した要素の子どもを全て除去する
    * @param {HTMLElement} element HTMLの要素
    */
    function removeAllChildren(element) {
        while (element.firstChild) { // 子どもの要素があるかぎり除去
            element.removeChild(element.firstChild);
        }
    }

        // ツイートエリアの作成
        removeAllChildren(tweetDivided);
        const anchor = document.createElement('a');
        const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=' +schedule.scheduleName+'&ref_src=twsrc%5Etfw';
           // + encodeURIComponent('')
            //+ '&ref_src=twsrc%5Etfw';
        anchor.setAttribute('href', hrefValue);
        anchor.className = 'twitter-hashtag-button';
        anchor.setAttribute('data-text', "予定調整くんを更新しました");
        anchor.innerText = '#あなたのいいところ をツイートする';
        tweetDivided.appendChild(anchor);
        twttr.widgets.load();

})();