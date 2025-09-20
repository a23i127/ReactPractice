import React from 'react';
import '../LanguageListPage.css';
import FilterBar from '../FilterBar';
import Language from '../language';

class LanguageListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: 'すべて',
    };
  }

  render() {
    const languageList = [
      {
        name: 'HTML & CSS',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg',
        description: 'Webページの見た目を作るための言語。HTMLで構造、CSSでデザインを担当します。',
        category: 'Web'
      },
      {
        name: 'JavaScript',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg',
        description: 'Webページに動きをつけるプログラミング言語。多くのWebサービスで使われています。',
        category: 'Web'
      },
      {
        name: 'React',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg',
        description: 'Facebookが開発したJavaScriptライブラリ。UIを効率的に作成できます。',
        category: 'Web'
      },
      {
        name: 'Ruby',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/ruby.svg',
        description: 'シンプルで書きやすいプログラミング言語。Web開発やスクリプト作成に使われます。',
        category: 'Backend'
      },
      {
        name: 'Ruby on Rails',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/rails.svg',
        description: 'Rubyで書かれたWebアプリケーションフレームワーク。効率的にWebサービスを開発できます。',
        category: 'Backend'
      },
      {
        name: 'Python',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/python.svg',
        description: 'AIやデータ分析、Web開発など幅広く使われる人気の高い言語です。',
        category: 'AI'
      }
    ];

    const categories = Array.from(new Set(languageList.map(l => l.category)));
    const filteredList = this.state.selectedCategory === 'すべて'
      ? languageList
      : languageList.filter(l => l.category === this.state.selectedCategory);

    return (
      <div>
        <h1>言語一覧</h1>
        <FilterBar
          categories={categories}
          selected={this.state.selectedCategory}
          onSelect={cat => this.setState({ selectedCategory: cat })}
        />
        <div className='language'>
          {filteredList.map((languageItem, idx) => {
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

export default LanguageListPage;
