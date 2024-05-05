#!/bin/bash

cd /chemin/vers/votre/projet
git add .
DATE=$(date)
git commit -m "Commit automatique du $DATE"
git push origin main