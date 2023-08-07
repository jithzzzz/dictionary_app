FROM node:13.12.0-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
FROM nginx:stable-alpine
# Copy the built app from the previous stage to the Nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy the nginx.conf file to Nginx's configuration directory
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
EXPOSE 3001
CMD [ "nginx", "-g", "daemon off;"]