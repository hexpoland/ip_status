'use babel';
import ip from 'ip';
var $ = require('jquery');

export default class IpStatusView {

  constructor(serializedState) {

    var that = this;

    var mac={
      myIp:ip.address(),
      isConnected:()=>{
        window.addEventListener('online',()=>{
          console.log('online');
            that.element.innerHTML=ip.address();
        })
        window.addEventListener('offline',()=>{
          console.log('offline');
            that.element.innerHTML="disconnected (127.0.0.1)"
        })
      }
    }
    this.element = document.createElement('div')
    this.element.classList.add('ip-status')
    this.element.classList.add('inline-block');
    this.element.innerHTML="<span class='icon icon-link'></span>"+"<a href=http://"+mac.myIp+":3000>"+mac.myIp+"</a>";



    $(document).ready(function() {

      console.log(mac.isConnected());
      var footerBar = atom.workspace.getFooterPanels()

      footerBar[0].getItem().leftPanel.appendChild(that.element);
    });



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
  view() {
    let footerBar = atom.workspace.getFooterPanels()

    footerBar[0].getItem().leftPanel.appendChild(this.element);


    // $('.status-bar-left').append(this.element)
    // console.log('debug');
  }

}
