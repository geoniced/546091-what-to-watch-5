import {noop} from "./test-data/test-data";

Object.defineProperty(HTMLMediaElement.prototype, `muted`, {
  set: noop,
});

window.HTMLMediaElement.prototype.load = noop;
window.HTMLMediaElement.prototype.play = noop;
window.HTMLMediaElement.prototype.pause = noop;
window.HTMLMediaElement.prototype.addTextTrack = noop;
