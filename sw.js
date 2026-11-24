// Pact's service worker. It exists so phones can show notifications (they only allow them through a
// service worker). It does not cache anything and does not touch network requests.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));

// Tapping a notification brings the open Pact tab forward, or opens Pact if no tab is left.
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil((async () => {
    const tabs = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const tab of tabs) if ("focus" in tab) return tab.focus();
    if (self.clients.openWindow) return self.clients.openWindow(self.registration.scope);
  })());
});
