# Developer Portfolio

## About the Project

Developer Portfolio is a personal website designed to present information about a developer, their technical skills, projects, and professional background.

The main goal of the project is to create a simple and accessible way to showcase development experience and provide contact information.

## Features

- **About Me** — personal introduction and background.
- **Skills** — overview of technical skills and technologies.
- **Projects** — showcase of completed projects.
- **Contact** — information for getting in touch.
- **Responsive Design** — layout adapted for different screen sizes.

## Technologies

- Python
- Flask
- PostgreSQL
- HTML5
- CSS3
- JavaScript

## Getting Started

### Prerequisites

- Python
- PostgreSQL
- Git
- Visual Studio Code (recommended)

### 1. Clone the Repository

```bash
git clone https://github.com/KnownName123/webapp.git
```

### 2. Navigate to the Project Directory

```bash
cd webapp/developer-portfolio
```

### 3. Configure Environment Variables

Create a `.env` file in the project root directory and specify the following variables:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=
DB_USER=
DB_PASSWORD=

FLASK_APP=app.py
FLASK_ENV=development
SECRET_KEY=
```

Fill in `DB_NAME`, `DB_USER`, and `DB_PASSWORD` with your PostgreSQL database credentials.

Set `SECRET_KEY` to a secure, random value.

### 4. Install Dependencies

First, install the PostgreSQL adapter:

```bash
py -m pip install --only-binary=:all: psycopg2-binary
```

Then install the remaining project dependencies:

```bash
py -m pip install -r requirements.txt
```

### 5. Run the Application

Start the Flask application:

```bash
py app.py
```

Open the application in your browser:

```text
http://127.0.0.1:5000
```

## Testing

The website can be analyzed using Google Lighthouse in Chrome DevTools.

The following aspects can be evaluated:

- Performance
- Accessibility
- Best Practices
- SEO

## Author

**Viktor Tamirian**

Computer Science Student

GitHub: [KnownName123](https://github.com/KnownName123)
