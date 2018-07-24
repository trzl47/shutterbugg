#!/usr/bin/env bash
docker-compose -f build.yml up --build -d && \
docker system prune --volumes && \
mkdir services/react-nginx/build && \
cp -r services/react/build/client services/react-nginx/build && \
docker build -t trzl/portfolio:shutterbugg-proxy.1 -f ./services/reverseproxy/Dockerfile ./services/reverseproxy && \
docker push trzl/portfolio:shutterbugg-proxy.1 && \
docker build -t trzl/portfolio:shutterbugg-react.1 -f ./services/react-nginx/build.Dockerfile ./services/react-nginx && \
docker push trzl/portfolio:shutterbugg-react.1 && \
docker-compose down && \
docker system prune --volumes && \
sudo rm -rf services/react-nginx/build && \
sudo rm -rf services/react/build/client && \
echo "Build complete!"