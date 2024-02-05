# Basic info Python

## Table of Contents

- [Basic info Python](#basic-info-python)
  - [Table of Contents](#table-of-contents)
  - [Links](#links)
  - [Basic Create Virtual Environments](#basic-create-virtual-environments)
  - [Project](#project)
  - [Poetry](#poetry)
    - [Basic command](#basic-command)

## Links

1. api docs <https://binance-docs.github.io/apidocs/spot/en/#change-log>
2. binance-connector-python <https://github.com/binance/binance-connector-python>

## Basic Create Virtual Environments

1. Создаем виртуальное окружение Virtual Environments: **py -m venv .venv**
2. Активируем окружение:  **.venv\Scripts\activate**
3. Заходим в окружение: **.venv\Scripts\python**
4. Выходим из окружения. Ctrl+Z
5. установка пакетов pip: <https://packaging.python.org/en/latest/tutorials/packaging-projects/>
    1. обновления менеджера пакетов в локальной среде **py -m pip install --upgrade pip**
    2. проверка версии пакетов **py -m pip --version**

## Project

1. pyproject.toml - configuration file for Python, which is used to control the dependencies and settings of the project.

## Poetry

Link: <https://python-poetry.org/>

1. Project creation
   1. **poetry new --src my-package**
   2. activates the virtual environment.

2. Environment setup
   1. Get the path to Python **where python**
   2. Info about environment **poetry env info**
   3. Create a local environment **poetry env use C:\Users\max20\AppData\Local\Programs\Python\Python312\python.exe**
   4. Activate the local environment (\Scripts\activate) **poetry shell**

### Basic command

1. Check environment dependencies **pip freeze**
2. Check the location of the environment **where pip**
3. Install packages **poetry add package**
4. Install development packages **poetry add -D mypy**
5. View package dependency tree **poetry show --tree**
