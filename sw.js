   self.addEventListener('install', () => self.skipWaiting());
   self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
   self.addEventListener('notificationclick', (e) => {
     e.notification.close();
     const url = (e.notification.data && e.notification.data.url) || 'https://levelupstore.co.za';
     e.waitUntil(self.clients.openWindow(url));
   });

