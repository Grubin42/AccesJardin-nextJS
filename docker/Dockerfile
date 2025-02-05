# Dockerfile

# Utilise une image Node.js légère
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de configuration et installer les dépendances
COPY package*.json ./
RUN npm install && npm install -g serve

# Copier l'intégralité du code de l'application
COPY . .

# Copier le script d'entrée et le rendre exécutable
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

# Exposer le port de l'application
EXPOSE 3000

# Lancer le script d'entrée
CMD ["/app/entrypoint.sh"]