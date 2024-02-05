import schedule
import time


def job():
    # Ваш код для обработки данных
    print("I'm working...")


schedule.every(5).seconds.do(job())


def main():
    say_hello()


def say_hello():
    print("Hello, world!")


while True:
    schedule.run_pending()
    time.sleep(1)
