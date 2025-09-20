import React from 'react';
import Language from './language';
import "./App.css"; 
class App extends React.Component {
  render() {
    const languageList = [
      {
        name: 'HTML & CSS',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg',
        description: 'Webページの見た目を作るための言語。HTMLで構造、CSSでデザインを担当します。'
      },
      {
        name: 'JavaScript',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg',
        description: 'Webページに動きをつけるプログラミング言語。多くのWebサービスで使われています。'
      },
      {
        name: 'React',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg',
        description: 'Facebookが開発したJavaScriptライブラリ。UIを効率的に作成できます。'
      },
      {
        name: 'Ruby',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/ruby.svg',
        description: 'シンプルで書きやすいプログラミング言語。Web開発やスクリプト作成に使われます。'
      },
      {
        name: 'Ruby on Rails',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/rails.svg',
        description: 'Rubyで書かれたWebアプリケーションフレームワーク。効率的にWebサービスを開発できます。'
      },
      {
        name: 'Python',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/python.svg',
        description: 'AIやデータ分析、Web開発など幅広く使われる人気の高い言語です。'
      }
    ];

    return (
      <div>
        <h1>言語一覧</h1>
        <div className='language'>
          {languageList.map((languageItem, idx) => {
            return (
              <Language 
                key={languageItem.name + idx}
                name={languageItem.name}
                image={languageItem.image}
                description={languageItem.description}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;