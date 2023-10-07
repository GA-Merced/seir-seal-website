---
title: Environment Variables
description: A Reference on environment variables
---

# Environmental Variables
Environment variables are a fundamental concept in computer science and software development. They are essentially dynamic values that can affect the behavior of software and operating systems. Environment variables store configuration settings, system paths, and other essential information that programs and scripts can access.

Here are some key points about environment variables:

## What They Are:

Environment variables are key-value pairs that store information at the system level.
They are often used to configure software, define system-wide settings, or provide data that programs need to function correctly.
These variables are accessible to all processes running on a system.

## How to Use Them in Bash (Linux/macOS):

To view the value of an environment variable, use the echo command followed by the variable name preceded by a dollar sign (e.g., `echo $HOME`).

To set or modify an environment variable for the current session, use the export command (e.g., `export MY_VARIABLE="some value"`).

To make an environment variable persist across sessions, you can add the export command to your shell profile file (e.g., `.bashrc` or .`bash_profile`).

## How to Use Them in PowerShell (Windows):

To view the value of an environment variable, use the echo command with the variable enclosed in percentage signs (e.g., `echo %USERPROFILE%`).

To set or modify an environment variable for the current session, use the $env: prefix (e.g., `$env:MY_VARIABLE = "some value"`).

To make an environment variable persist across sessions, you can use the "System Properties" settings in the Control Panel or modify the Windows Registry.

## .env Files:

A .env file is a plain text configuration file used to store environment variables.
These files are often used in web development projects to define variables like database connection strings, API keys, and other sensitive information.

Each line in a .env file typically consists of a variable name and its associated value (e.g., `DB_USERNAME=johndoe`).

Tools like dotenv in JavaScript and libraries in other languages can load variables from .env files into the environment.

Environment variables are versatile and widely used in various contexts, from system configuration to application development. They provide a way to separate configuration from code, making it easier to manage settings and secrets across different environments (e.g., development, testing, production) without hardcoding them into your scripts or applications.

# Env Vars across languages

| Language       | Accessing Env Vars                   | Library for .env Files      |
|----------------|-------------------------------------|-----------------------------|
| Python         | `os.environ.get('VAR_NAME')`         | `python-dotenv`             |
| JavaScript     | `process.env.VAR_NAME`               | `dotenv`                    |
| Ruby           | `ENV['VAR_NAME']`                   | `dotenv`                    |
| PHP            | `getenv('VAR_NAME')`                 | `vlucas/phpdotenv`          |
| Go             | `os.Getenv("VAR_NAME")`              | `github.com/joho/godotenv`  |
| Java           | `System.getenv("VAR_NAME")`          | N/A                         |
| C# / .NET      | `Environment.GetEnvironmentVariable("VAR_NAME")` | N/A           |
| Swift          | `ProcessInfo.processInfo.environment["VAR_NAME"]` | N/A              |
| Rust           | `std::env::var("VAR_NAME")`          | N/A                         |
| Perl           | `$ENV{'VAR_NAME'}`                  | N/A                         |
| Bash           | `$VAR_NAME`                         | N/A                         |
| PowerShell     | `$env:VAR_NAME`                     | N/A                         |
| Lua            | `os.getenv("VAR_NAME")`              | N/A                         |
| Kotlin         | `System.getenv("VAR_NAME")`          | N/A                         |
| TypeScript     | `process.env.VAR_NAME`               | `dotenv`                    |

## Commonly Used Environmental Variables

Here is a list of commonly used variables and whether they are typically defined by the operating system or the developer.

| Variable Name       | Description                                            | Provided By   |
|---------------------|--------------------------------------------------------|---------------|
| `PATH`              | Specifies the directories where executable programs are located | OS |
| `HOME`              | Specifies the user's home directory                           | OS |
| `USER`              | Specifies the username of the current user                  | OS |
| `LOGNAME`           | Specifies the login name of the current user                 | OS |
| `TEMP` or `TMPDIR`   | Specifies a temporary directory for storing temporary files | OS |
| `PWD`               | Specifies the current working directory                      | OS |
| `LANG` or `LANGUAGE`| Specifies the current language and locale settings           | OS |
| `LD_LIBRARY_PATH`   | Specifies the directories where shared libraries are located | OS/Programmer |
| `JAVA_HOME`         | Specifies the location of the installed Java SDK             | Programmer |
| `PYTHONPATH`        | Specifies additional directories to search for Python modules | Programmer |
| `CLASSPATH`         | Specifies the location of Java class files                   | Programmer |
| `DB_URL`            | Specifies the URL of a database server                       | Programmer |
| `API_KEY`           | Specifies an API key for accessing external services        | Programmer |
| `SHELL`              | Specifies the path to the user's preferred shell           | OS            |
| `EDITOR`             | Specifies the user's preferred text editor                 | OS/Programmer |
| `MAIL`               | Specifies the location of the user's mailbox               | OS            |
| `DISPLAY`            | Specifies the X Window System display server               | OS            |
| `TZ`                 | Specifies the timezone of the system                        | OS            |
| `TERM`               | Specifies the type of terminal                             | OS            |
| `HTTP_PROXY`         | Specifies the HTTP proxy server                            | Programmer    |
| `HTTPS_PROXY`        | Specifies the HTTPS proxy server                           | Programmer    |
| `NO_PROXY`           | Specifies the domains that should bypass the proxy server  | Programmer    |
| `HOSTNAME`           | Specifies the hostname of the system                       | OS            |
| `PORT`               | Specifies the port number for a network service            | Programmer    |
| `DEBUG`              | Specifies whether to run the application in debug mode     | Programmer    |
| `CONFIG_PATH`        | Specifies the path to a configuration file                  | Programmer    |
| `NODE_ENV`           | Specifies the environment in which a Node.js app is running| Programmer    |
| `DATABASE_URL`       | Specifies the URL of a database server                     | Programmer    |
| `SECRET_KEY`         | Specifies a secret key for encrypting data                 | Programmer    |
| `AWS_ACCESS_KEY_ID`  | Specifies the AWS access key ID                            | Programmer    |
| `AWS_SECRET_ACCESS_KEY` | Specifies the AWS secret access key                     | Programmer    |
| `REDIS_URL`          | Specifies the URL of a Redis server                        | Programmer    |
| `RACK_ENV`           | Specifies the environment in which a Ruby app is running   | Programmer    |
| `MONGO_URL`          | Specifies the URL of a MongoDB server                      | Programmer    |
| `GOPATH`             | Specifies the workspace directory for Go projects          | Programmer    |
| `ANDROID_HOME`       | Specifies the location of the Android SDK                  | Programmer    |
| `SDKROOT`            | Specifies the root directory of the SDK being used         | Programmer    |
| `PGDATA`             | Specifies the location of the PostgreSQL data directory    | Programmer    |
| `NPM_CONFIG_PREFIX`      | Prefix configuration where npm will find/keep packages  | Programmer    |
| `NVM_DIR`                | NVM (Node Version Manager) directory path                | Programmer    |
| `RBENV_ROOT`             | Directory path for rbenv (Ruby Version Manager)          | Programmer    |
| `RUBYOPT`                | Specifies additional options to Ruby interpreter         | Programmer    |
| `BUNDLE_PATH`            | Path where Bundler installs your gems                    | Programmer    |
| `RAILS_ENV`              | Specifies the environment in which Rails app is running | Programmer    |
| `GEM_HOME`               | The directory where gems are installed                   | Programmer    |
| `GEM_PATH`               | Path where RubyGems looks for gems                       | Programmer    |
| `RUSTUP_HOME`            | Directory path for rustup (Rust toolchain installer)     | Programmer    |
| `CARGO_HOME`             | Directory path for Cargo, Rust's package manager         | Programmer    |
| `LOCALAPPDATA`           | Path to the local app data directory on Windows          | OS            |
| `APPDATA`                | Path to the roaming app data directory on Windows        | OS            |
| `CommonProgramFiles`     | Path to the common program files directory on Windows    | OS            |
| `ProgramFiles`           | Path to the program files directory on Windows           | OS            |
| `SystemRoot`             | Path to the Windows system root directory                | OS            |
| `GOPROXY`                | URL of a Go module proxy                                 | Programmer    |
| `GRADLE_HOME`            | Specifies the location of the installed Gradle           | Programmer    |
| `KUBECONFIG`             | Path to a kubeconfig file for access to Kubernetes       | Programmer    |
| `DOCKER_HOST`            | Specifies the hostname or IP address of the Docker daemon| Programmer    |
| `DOCKER_CERT_PATH`       | Path to directory with Docker TLS certificates           | Programmer    |
| `DOCKER_TLS_VERIFY`      | Enable or Disable TLS verification for Docker            | Programmer    |
| `COMPOSE_PROJECT_NAME`   | Specifies a project name for Docker Compose              | Programmer    |
| `VIRTUAL_ENV`            | Specifies the path to a Python virtual environment       | Programmer    |
| `FLASK_ENV`              | Specifies the environment in which Flask app is running  | Programmer    |
| `FLASK_APP`              | Specifies the name of the Flask application              | Programmer    |
| `COMPOSER_HOME`          | Directory path for Composer, the PHP dependency manager       | Programmer    |
| `COMPOSER_VENDOR_DIR`    | Directory path for Composer's vendor directory                | Programmer    |
| `ANT_HOME`               | Specifies the location of the installed Apache Ant            | Programmer    |
| `MAVEN_HOME`             | Specifies the location of the installed Apache Maven          | Programmer    |
| `TOMCAT_HOME`            | Specifies the location of the installed Apache Tomcat         | Programmer    |
| `SPRING_PROFILES_ACTIVE` | Specifies active profiles for a Spring application            | Programmer    |
| `KAFKA_HOME`             | Specifies the location of the installed Apache Kafka          | Programmer    |
| `ZOOKEEPER_HOME`         | Specifies the location of the installed Apache ZooKeeper      | Programmer    |
| `HADOOP_HOME`            | Specifies the location of the installed Apache Hadoop         | Programmer    |
| `HADOOP_CONF_DIR`        | Specifies the directory of Hadoop configuration files         | Programmer    |
| `SPARK_HOME`             | Specifies the location of the installed Apache Spark          | Programmer    |
| `PYSPARK_PYTHON`         | Specifies the Python binary executable for PySpark            | Programmer    |
| `PYSPARK_DRIVER_PYTHON`  | Specifies the Python binary executable for the PySpark driver | Programmer    |
| `CASSANDRA_HOME`         | Specifies the location of the installed Apache Cassandra      | Programmer    |
| `MYSQL_HOME`             | Specifies the location of the installed MySQL server          | Programmer    |
| `PGHOST`                 | Specifies the host name of the PostgreSQL server              | Programmer    |
| `PGPORT`                 | Specifies the port number of the PostgreSQL server            | Programmer    |
| `PGUSER`                 | Specifies the username for the PostgreSQL server              | Programmer    |
| `PGPASSWORD`             | Specifies the password for the PostgreSQL server              | Programmer    |
| `ANDROID_SDK_ROOT`       | Specifies the location of the Android SDK                    | Programmer    |
| `GOBIN`                  | Specifies the directory where Go binaries are installed       | Programmer    |
| `JRE_HOME`               | Specifies the location of the installed Java Runtime Environment | Programmer |
| `JDK_HOME`               | Specifies the location of the installed Java Development Kit  | Programmer    |
| `SCALA_HOME`             | Specifies the location of the installed Scala                | Programmer    |
| `PERL5LIB`               | Specifies additional directories to search for Perl libraries| Programmer    |
| `R_LIBS`                 | Specifies additional directories to search for R libraries    | Programmer    |