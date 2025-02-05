#!/bin/sh
# entrypoint.sh
# Ce script démarre l'application en fonction du mode (développement ou production)

if [ "$MODE" = "development" ]; then
  echo "Mode développement : démarrage avec hot reload..."
  npm run dev
else
  echo "Mode production : construction et export statique..."
  npm run build && npm run export
  echo "Démarrage du serveur statique sur le dossier 'out'..."
  serve -s out -l 3000
fi