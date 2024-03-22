# Use mysql bookworm to get low weight images

FROM mysql:8.0.36-bookworm

# Mysql container has a directory /docker-entrypoint-initdb.d which executes all files with .sh .sql .sql.gz files to import database structure

COPY docker-entrypoint-initdb.d /docker-entrypoint-initdb.d

# Create persistent volume for the database data

VOLUME ["/var/lib/mysql"]

# Expose ports 

EXPOSE 3306 33060 

# Use mysql user

USER mysql