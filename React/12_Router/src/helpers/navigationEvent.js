export const NAVIGATION_EVENT = "pushState";

export function navigate(to) {
  window.history.pushState({}, "", to);
  const navigationEvent = new Event(NAVIGATION_EVENT);
  window.dispatchEvent(navigationEvent);
}
