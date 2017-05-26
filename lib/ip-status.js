'use babel';

import IpStatusView from './ip-status-view';
import { CompositeDisposable } from 'atom';
import ip from 'ip';


export default {
  ipStatusView: null,
  modalPanel: null,
  subscriptions: null,
  activate(state) {

    //console.log(atom.disposable.isDisposable(atom.workspace));
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();
    console.log(this.subscriptions);

    this.ipStatusView = new IpStatusView(state.ipStatusViewState);
    //ATOM DISPATCH TO CALL COMMAND FROM CODE
    
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.ipStatusView.destroy();
  },

  serialize() {
    return {
      ipStatusViewState: this.ipStatusView.serialize()
    };
  },

  toggle() {

  },
  pause(numberMillis){

  var now = new Date();
  var exitTime = now.getTime() + numberMillis;
  while (true) {
    now = new Date();
    if (now.getTime() > exitTime)
   return;

}
  }

};
