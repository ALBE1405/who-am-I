# Personal site — https://github.com/ALBE1405/who-am-I
#
#   make install          Install dependencies
#   make dev              Local preview
#   make build            Production build
#   make deploy           Build, commit, and push to GitHub
#   make deploy MSG="..." Same, with a custom commit message

REMOTE_URL ?= https://github.com/ALBE1405/who-am-I.git
BRANCH ?= main
MSG ?= Update personal website

.PHONY: help install dev build lint format start checkin deploy

help:
	@printf '%s\n' \
	  'make install          Install npm dependencies' \
	  'make dev              Start the local preview server' \
	  'make build            Create a production build' \
	  'make lint             Lint the project' \
	  'make format           Format the project' \
	  'make start            Build and preview the production output' \
	  'make checkin          Commit and push to GitHub' \
	  'make deploy           Build, then commit and push to GitHub' \
	  'make deploy MSG="..." Deploy with a custom commit message'

install:
	npm ci

dev:
	npm run dev

build:
	npm run build

lint:
	npm run lint

format:
	npm run format

start: build
	npm run start

checkin:
	@git rev-parse --is-inside-work-tree >/dev/null
	git add -A
	@if git diff --cached --quiet; then \
		echo 'Nothing to commit.'; \
	else \
		git commit -m "$(MSG)"; \
	fi
	@if git remote get-url origin >/dev/null 2>&1; then \
		git remote set-url origin "$(REMOTE_URL)"; \
	else \
		git remote add origin "$(REMOTE_URL)"; \
	fi
	git push -u origin "HEAD:$(BRANCH)"

deploy: build checkin
