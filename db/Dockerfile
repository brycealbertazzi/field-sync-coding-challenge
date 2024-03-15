FROM postgres:latest

# Create a directory for initialization scripts
RUN mkdir -p /docker-entrypoint-initdb.d

# Copy initialization script into container
COPY InitDB.sql /docker-entrypoint-initdb.d/01_InitDB.sql

# Set permissions and ownership for the directory
RUN chown -R postgres:postgres /docker-entrypoint-initdb.d
RUN chmod -R 700 /docker-entrypoint-initdb.d
