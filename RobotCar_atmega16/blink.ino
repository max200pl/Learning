#include <OneWire.h>
#include <DallasTemperature.h>
#include <LCD_I2C.h>

// Лучше так для PA0:
#define ONE_WIRE_PIN 3 // D3 = PD3 (pin 13)

OneWire oneWire(ONE_WIRE_PIN);
DallasTemperature sensors(&oneWire);

LCD_I2C lcd(0x27, 16, 2);

void setup()
{
    lcd.begin();
    lcd.backlight();

    sensors.begin();

    lcd.setCursor(0, 0);
    lcd.print("DS18B20 on PA0");
    lcd.setCursor(0, 1);
    lcd.print("Init...");
    delay(800);
    lcd.clear();
}

void loop()
{
    // 1) Проверка presence pulse (есть ли устройство на 1-Wire линии)
    bool present = oneWire.reset(); // true = кто-то ответил

    lcd.setCursor(0, 1);
    if (present)
    {
        lcd.print("1W: OK          ");
    }
    else
    {
        lcd.print("1W: NO SENSOR   ");
    }

    // 2) Если нет датчика — не пытаемся читать температуру
    if (!present)
    {
        lcd.setCursor(0, 0);
        lcd.print("Temp: ---.-");
        lcd.print((char)223);
        lcd.print("C   ");
        delay(1000);
        return;
    }

    // 3) Есть датчик — читаем температуру
    sensors.requestTemperatures();
    float t = sensors.getTempCByIndex(0);

    lcd.setCursor(0, 0);
    lcd.print("Temp: ");

    if (t == DEVICE_DISCONNECTED_C)
    {
        lcd.setCursor(6, 0);
        lcd.print("ERROR   ");
    }
    else
    {
        lcd.setCursor(6, 0);
        lcd.print(t, 1);
        lcd.print((char)223);
        lcd.print("C  ");
    }

    delay(1000);
}
