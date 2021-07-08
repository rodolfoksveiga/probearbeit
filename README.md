# Probearbeit

Full Stack web application designed to solve a test work at a private company.

The repository contain two main folders, one for the backend and another for the frontend.

In order to run the app on your local machine, follow the instructions bellow.

After following the setup described you should be able to consume the data in the backend API using the frontend application.


## Git

### Requirements

0. Install **Git**.
```bash
$ sudo pacman -S git
```

### Setup

1. Create a local empty folder.
```bash
$ mkdir ~/probearbeit
```

2. Change working directory to the folder created.
```bash
$ cd ~/probearbeit
```

3. Clone the Git repository into an empty folder.
```bash
$ git clone git@github.com:rodolfoksveiga/probearbeit.git .
```


## Backend - Django RESTFul API

### Requirements

0. Install **Python3** and **Pipenv** to reproduce the backend API.
```bash
$ sudo pacman -S python3
$ pip3 install pipenv
```

### Setup

1. Change working directory to the backend folder.
```bash
$ cd ~/probearbeit/backend
```

2. Install the backend dependencies using **pipenv**.
```bash
$ pipenv install
```

3. Activate the virtual environment.
```bash
$ pipenv shell
```

4. Run the backend server on the port *8000*.
```bash
$ python manage.py runserver
```

5. Open your browser and navigate to the port *http://localhost:8000/*.


## Frontend - React and Redux with Typescript

### Requirements

0. Install **yarn**.
```bash
$ sudo pacman -S yarn
```

### Setup

1. Change working directory to the folder frontend foder.
```bash
$ cd ~/probearbeit/frontend
```

2. Install the frontend dependencies using **yarn**.
```bash
$ yarn install
```

3. Run the frontend server on the port *3000*.
```bash
$ yarn start
```

4. Open your browser and navigate to the port *http://localhost:3000/*.

