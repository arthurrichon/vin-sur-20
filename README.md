# vin-sur-20
Appli pour l'IIM

#### Installation des dernières versions de Ionic et Cordova (sudo pour le -g)
> Bien rajouter le --unsafe-perm=true --allow-root sinon il ne trouvera pas ios-deploy ce fgt.

```
  npm install -g ionic cordova
  npm install -g ios-deploy --unsafe-perm=true --allow-root
```

#### Open dans le browser et watch les fichiers (Port 8100 part défaut)

```
  ionic serve
```

#### Build, pas besoin d'add platforme ios avec ios-deploy

```
  ionic build ios
```
