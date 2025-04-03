#Image from Node 18
FROM node:18-alpine AS builder

#Work directoru
WORKDIR /app

#Copy the file of the frontend
COPY package.json package-lock.json ./
RUN npm install

#Copy the rest of the files 
COPY . .
RUN npm run build

#Using an image from Nginx
FROM nginx:alpine AS runner

WORKDIR /app

COPY --from=builder /app/dist /usr/share/nginx/html

#Expose port 8080
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]