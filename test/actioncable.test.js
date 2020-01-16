const sinon = require('sinon'),
  chai = require('chai'),
  should = chai.should();

const ActionCable = require('../src/actioncable');

describe('ActionCable', () => {
  describe('interface/integration', () => {
    beforeEach(() => { });
    it.skip('connects to a specified WebSockets URI', () => { });
    describe('event handling', () => {
      it.skip('handles open events on the WebSocket', () => { });
      it.skip('handles close events on the WebSocket', () => { });
      it.skip('handles error events on the WebSocket', () => { });
      it.skip('handles message events on the WebSocket', () => { });
    });
    describe('message type handling', () => {
      it.skip('handles welcome messages on the WebSocket', () => { });
      it.skip('handles heartbeat/ping messages on the WebSocket', () => { });
      it.skip('handles confirm_subscription messages on the WebSocket', () => { });
      it.skip('handles reject_subscription messages on the WebSocket', () => { });
    });
    describe('message sending', () => {
      it.skip('sends messages over the WebSocket with the proper format', () => { });
      it.skip('sends correct subscribe messages to subscribe to a channel on the ActionCable', () => { });
      it.skip('sends correct unsubscribe messages to unsubscribe to a channel on the ActionCable', () => { });
    });
    describe('connection management', () => {
      it.skip('checks for a heartbeat message every 10 seconds', () => { });
      it.skip('closes the WebSocket connection if more than 10s since last heartbeat', () => { });
    });
    it.skip('.', () => { });
  });
});
