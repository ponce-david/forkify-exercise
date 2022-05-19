import view from './view';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView';

class bookmarksView extends view {
  _parentEl = document.querySelector('.bookmarks__list');
  _errorMessage = `No bookmarks yet`;
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new bookmarksView();
