# Fem servir la imatge amb la distribució bookworm per ser més lleugera.
FROM mysql:8.0.36-bookworm

# Creem un directori per posar el arxiu sql que importarem.
RUN mkdir /docker-entrypoint-initdb.d

# Importem l'arxiu amb la configuració de la base de dades.
COPY Backend/db/db_proyect.sql /docker-entrypoint-initdb.d/

