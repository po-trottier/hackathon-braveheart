# Create the container from the alpine linux image
FROM node:lts as build-stage
# Create the directories we will need
RUN mkdir -p /tmp/braveheart
# Set the directory we want to run the next commands for
WORKDIR /tmp/braveheart
# Copy build files to docker
COPY . .
# Install the dependencies
RUN npm --prefix "frontend" install --force
# Run webpack and the vue-loader
RUN npm run --prefix "frontend" build

# Setup the NGINX container
FROM nginx:stable-alpine as production-stage
# Create the directories we will need
RUN mkdir -p /var/log/nginx
RUN mkdir -p /var/www/html
# Copy the respective nginx configuration files
COPY nginx_config/nginx.conf /etc/nginx/nginx.conf
COPY nginx_config/default.conf /etc/nginx/conf.d/default.conf
# Copy the built app to our served directory
COPY --from=build-stage /tmp/braveheart/frontend/dist /var/www/html
# Make all files belong to the nginx user
RUN chown nginx:nginx /var/www/html
# Expose the port being served
EXPOSE 80
# Start nginx and keep the process from backgrounding and the container from quitting
CMD ["nginx", "-g", "daemon off;"]
