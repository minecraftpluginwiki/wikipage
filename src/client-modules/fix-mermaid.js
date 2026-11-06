import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  // 1. ブラウザ側で d3-transition を確実に有効化する
  try {
    require('d3-transition');
  } catch (e) {
    // ignore
  }

  // 2. 万が一のための安全策（フォールバック）
  // もし transition が見つからない場合でも、画面がエラーで止まらないようにモックする
  try {
    const d3Selection = require('d3-selection');
    if (d3Selection && d3Selection.selection && !d3Selection.selection.prototype.transition) {
      d3Selection.selection.prototype.transition = function () {
        const sel = this;
        const proxy = {
          duration: () => proxy,
          style: (name, val) => {
            try { sel.style(name, val); } catch (_) {}
            return proxy;
          },
          attr: (name, val) => {
            try { sel.attr(name, val); } catch (_) {}
            return proxy;
          },
        };
        return proxy;
      };
    }
  } catch (e) {
    // ignore
  }
}