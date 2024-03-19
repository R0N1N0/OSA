# Use mysql bookworm to get low weight images
FROM mysql:8.0.36-bookworm

# Mysql container has a directory /docker-entrypoint-initdb.d which executes all files with .sh .sql files
COPY docker-entrypoint-initdb.d/db_proyect.sql /docker-entrypoint-initdb.d/db_proyect.sql

# Create persistent volume for the database 
VOLUME ["/var/lib/mysql"]
