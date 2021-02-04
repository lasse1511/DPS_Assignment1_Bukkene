FROM node:7
ADD api.js /api.js
ENTRYPOINT [ "node", "api.js" ]