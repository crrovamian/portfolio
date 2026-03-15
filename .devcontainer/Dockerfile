FROM node:22-slim
ARG GIT_USER_EMAIL="default@example.com"  
ARG GIT_USER_NAME="default_user" 
RUN mkdir -p /api
RUN apt-get update && apt-get install -y git curl openssh-client build-essential procps lsof wl-clipboard postgresql-client
RUN git config --global --add safe.directory /api
RUN git config --global user.name "${GIT_USER_NAME}"
RUN git config --global user.email "${GIT_USER_EMAIL}"
RUN /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
ENV PATH="/home/linuxbrew/.linuxbrew/bin:/home/linuxbrew/.linuxbrew/sbin:${PATH}"
RUN brew install lazygit fzf neovim ripgrep fd 
RUN git clone https://github.com/LazyVim/starter /root/.config/nvim
RUN corepack enable && corepack prepare pnpm@10.0.0 --activate
ENV PNPM_HOME=/usr/local/bin
RUN mkdir /opt/pnpm-store
RUN pnpm config set store-dir /opt/pnpm-store
RUN pnpm install -g opencode-ai
RUN pnpm install -g @fission-ai/openspec@latest
RUN brew install gh
# RUN pnpm add @dbml/cli -g 
# RUN pnpm add @softwaretechnik/dbml-renderer -g
RUN nvim --headless "+Lazy! sync" +qa # Instala plugins base
WORKDIR /api
