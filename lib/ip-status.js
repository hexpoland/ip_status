'use babel';

import IpStatusView from './ip-status-view';
import { CompositeDisposable } from 'atom';
import ip from 'ip';

export default {
  ipStatusView: null,
  modalPanel: null,
  subscriptions: null,
  constructor(statusBar){
    this.statusBar=statusBar;


  },

  activate(state,statusBar) {
    this.statusBar=statusBar;
    this.ipStatusView = new IpStatusView(state.ipStatusViewState);
    console.log(ip.address());
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    // this.subscriptions.add(atom.commands.add('atom-workspace', {
    //   'ip-status:toggle': () => this.toggle()
    // }));
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

  }

};
