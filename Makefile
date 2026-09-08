# Personal site — https://github.com/ALBE1405/who-am-I
# Live site after deploy: https://albe1405.github.io/who-am-I/
#
#   make                  Build, commit, and push (GitHub Pages deploys)
#   make MSG="..."        Same, with a custom commit message
#   make install          Install dependencies
#   make dev              Local preview
#   make build            Production build

REMOTE_URL ?= https://github.com/ALBE1405/who-am-I.git
BRANCH ?= main
MSG ?= Update personal website
LOCAL_URL ?= http://localhost:5173
PREVIEW_URL ?= http://localhost:4173
LIVE_URL ?= https://albe1405.github.io/who-am-I/

.DEFAULT_GOAL := deploy

.PHONY: help install dev build preview start checkin deploy urls

node_modules: package-lock.json package.json
	npm ci
	@touch node_modules

help:
	@printf '%s\n' \
	  'make                  Build, push, then open the local site' \
	  'make MSG="..."        Same, with a custom commit message' \
	  'make install          Install npm dependencies' \
	  'make dev              Start the local preview server' \
	  'make build            Create a static production build' \
	  'make preview          Preview the production build' \
	  'make checkin          Commit and push to GitHub'
	@$(MAKE) urls

urls:
	@printf '\n%s\n' \
	  'See the site here:' \
	  "  Local:  $(LOCAL_URL)" \
	  "  Live:   $(LIVE_URL)" \
	  ''

install: node_modules

dev: node_modules
	@if lsof -nP -iTCP:5173 -sTCP:LISTEN >/dev/null 2>&1; then \
		printf '\nAlready running. Open locally: %s\n\n' "$(LOCAL_URL)"; \
	else \
		printf '\nOpen locally: %s\n\n' "$(LOCAL_URL)"; \
		npm run dev; \
	fi

build: node_modules
	GITHUB_PAGES=true npm run build
	rm -rf docs
	cp -R dist docs
	touch docs/.nojekyll

preview: build
	@printf '\nOpen locally: %s\n\n' "$(PREVIEW_URL)"
	npm run preview

start: preview

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
	@$(MAKE) urls
	@$(MAKE) dev
