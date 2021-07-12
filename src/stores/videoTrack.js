import { derived } from "svelte/store";
import { localStream } from "./localStream";

export const videoTrack = derived(
  [localStream],
  ([$stream], set) => {
    if ($stream) {
      set($stream.getVideoTracks()[0] || null);
    } else {
      set(null);
    }
  },
  null
);
