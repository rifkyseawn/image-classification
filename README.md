# Image Classification Website


A full-stack web application for real-time visual recognition built with modern technologies and dual theme support.

### Website mode:

![Image](https://github.com/user-attachments/assets/3bb0b5a1-4683-41c4-80b5-4fa7de1b55da)

![Image](https://github.com/user-attachments/assets/037c48fe-33e0-4297-b86f-c3e1bf059b50)

![Image](https://github.com/user-attachments/assets/97f902f1-29d2-4bfb-96f3-4f97aa05f8d1)

![Image](https://github.com/user-attachments/assets/c3348d60-6f84-4e93-abd3-144e0845b3b3)

![Image](https://github.com/user-attachments/assets/784ec10d-5d2f-477b-a6da-854117ff50b7)

### Responsive mode:

![Image](https://github.com/user-attachments/assets/a181d886-bad2-40c0-837a-e91a62ff5956)

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Customizing the Application](#customizing-the-application)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed:

1. [Python 3.7–3.10](https://www.python.org/downloads/)  
   *Note: This project uses TensorFlow v2.9.1, so please verify that your Python version is compatible. More details can be found [here](https://www.tensorflow.org/install/source#tested_build_configurations).*
2. [Node.js](https://nodejs.org/en/)
3. [Visual Studio Code](https://code.visualstudio.com/download)

## Installation

### Backend

1. **Create a Virtual Environment**  
   Navigate to the backend folder from the root directory and run:

```bash
cd backend
python -m venv venv
```


#### 2. Activate the virtual environment

On macOS:

```bash
source venv/bin/activate
```

On Windows:

```bash
venv\scripts\activate
```


#### 3. Install Dependencies

While in the backend directory, install the necessary packages:

```bash
pip install -r requirements.txt
```


#### 4. Run migrations

Set up the database by executing:

```bash
python manage.py makemigrations
python manage.py migrate
```


### Frontend

#### 1. Install Dependencies

From the root directory, switch to the frontend folder and run:

```bash
cd frontend
npm install
```


## Running the Application

To launch the application, ensure both the backend and frontend servers are running:

### 1. Start the Backend Server:

In the backend directory, execute:

```bash
python manage.py runserver
```


### 2. Start the Frontend Server:
In the frontend directory, run:

```bash
npm run dev
```

## View the application

Open http://localhost:3000/ in your browser.
