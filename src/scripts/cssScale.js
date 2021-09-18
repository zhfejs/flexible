/*
 * @Description: 大屏适配css3方案
 * @Autor: zhenghui
 * @Date: 2021-07-19 16:40:15
 */
import { isHtmlElement, isString } from '../utils/types';
class DomResize {
  constructor(settings = {}) {
    const {
      scaleControlEl = 'body',
      designWidth = 1920,
      rootEl = 'body>div'
    } = settings;
    this.designWidth = designWidth;
    this.scaleControlEl = scaleControlEl;
    this.rootEl = rootEl;
    this.resizeEventInit();
  }

  querySelectorByEl(el) {
    if (isHtmlElement(el)) {
      return el;
    } else if (isString(el)) {
      return document.querySelector(el);
    } else {
      return null;
    }
  }

  domResizeCallback() {
    const { clientWidth } = document.documentElement;
    const scale = clientWidth / this.designWidth;
    this.rootElDom.style.height = '100vh';
    if (clientWidth <= this.designWidth) {
      this.controlElDom.style.transform = `scale(${scale})`;
      this.controlElDom.style.overflow = 'hidden';
      this.controlElDom.style.transformOrigin = 'left top 0';
      this.controlElDom.style.marginLeft = '0px';
      this.controlElDom.style.width = `${clientWidth}px`;
      this.rootElDom.style.height = '1080px';
    }
    this.printLog('缩放比列:', clientWidth / this.designWidth);
    this.printLog('视窗宽度:', `${clientWidth}<======>${this.designWidth}`);
    this.printLog('视窗高度:', document.documentElement.clientHeight);
    console.log('');
  }

  resizeEventInit() {
    window.onload = () => {
      this.controlElDom = this.querySelectorByEl(this.scaleControlEl);
      this.rootElDom = this.querySelectorByEl(this.rootEl);
      this.domResizeCallback();
      window.addEventListener('resize', () => this.domResizeCallback(), false);
    };
  }

  printLog(label, text) {
    console.log(
      `%c${label}%c${text}`,
      'color: #ffffff; background: #000000;padding:2px 10px;font-size:15px;border-radius:12px 0 0 12px;',
      'color: #000000; background: #47e; padding:2px 10px;font-size:15px;border-radius:0 12px 12px 0;'
    );
  }
}

export default DomResize;
