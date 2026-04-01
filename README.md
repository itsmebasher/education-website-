# education-website-

A Java Spring Boot education website supporting SDG 4: Quality Education. The application serves a responsive learning landing page, quiz interaction, and resource sections via an embedded web server.

## Run locally

1. Install Java 17 and Maven.
2. From the project root:

```bash
cd /workspaces/education-website-
mvn spring-boot:run
```

3. Open `http://localhost:8080` in your browser.

## Project structure

- `pom.xml` — Maven build file
- `src/main/java/com/educationwebsite/EducationWebsiteApplication.java` — Spring Boot entry point
- `src/main/resources/static/` — static website assets
