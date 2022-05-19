import view from './view';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView';

class resultsView extends view {
  _parentEl = document.querySelector('.results');
  _errorMessage = `No recipes found`;
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new resultsView();
