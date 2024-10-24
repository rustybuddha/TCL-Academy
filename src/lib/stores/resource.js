import { writable } from 'svelte/store';


export let popup = writable(0);

export let src_id = writable(0);

export function togglePopup() {
    popup.update((value) => !value);
}