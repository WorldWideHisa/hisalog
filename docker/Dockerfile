FROM node:20.14.0-bookworm-slim

WORKDIR /app
ENV HOME=/app

RUN apt-get update && apt-get install -y --no-install-recommends tzdata \
    curl \
    vim \
    input-utils \
    less \
    dnsutils \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

COPY . .
