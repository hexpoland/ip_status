'use babel';
import ip from 'ip';
var $=require('jquery');

export default class IpStatusView {

  constructor(serializedState) {
    this.element=document.createElement('div')
    this.element.classList.add('ip-status')
    this.element.classList.add('inline-block')
    this.element.innerHTML=ip.address();
    $('.status-bar-left').append(this.element)
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }
  view(){

  }

  }
