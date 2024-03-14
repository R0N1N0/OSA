# Fem servir la imatge amb la distribució bookworm per ser més lleugera.
FROM mysql:8.0.36-bookworm

# La imatge oficial de mysql executa tots els arxius .sql .sh que hi ha dins de la carpeta /docker-entrypoint-initdb.d
# Per tant, afegim l'arxiu sql dins del directori.
COPY Backend/db/db_proyect.sql /docker-entrypoint-initdb.d/db_proyect.sql

VOLUME ["/var/lib/mysql"]

