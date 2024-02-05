# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- ---------------------------------------------------------------------------------- -->
# git & github are different. Github is a client/place which can host git-repositories. NPM is anything but not stands for node-pkg-manager. NPM is a standard repository for all the packages(dependencies)/libraries.

# pkg.json is a configuration for npm in a JSON structure. It keeps track of versions of installed pkgs.
# pkg-lock.json keeps track of exact versions(actual data) of installed pkgs 

# Transitive dependencies - our installed dependcs are dependent on further dependcs & so on.
# Each project/folder in node_modules has its own pkg.json & pkg-lock.json

# There are 2 types of pkgs/dependencies we can install - Dev & Normal. Dev dependencies are required in development phase, whereas Normal dependcs are also used in production phase. We are installing parcel as a Dev dependcs  "npm install -D parcel"

# we can regenerate/recreate node_modules/.parcel-cache/dist from pkg.json & pkg-lock.json, hence they are kept in .gitignore. Git should only have essential things, never put anything init which can be regenerated.

