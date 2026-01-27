#include <avr/io.h>
#include <util/delay.h>

#define LED_PIN PB0

int main(void)
{
    // Set LED_PIN as output
    DDRB |= (1 << LED_PIN);

    while (1)
    {
        // Toggle LED
        PORTB ^= (1 << LED_PIN);
        _delay_ms(1000);
    }

    return 0;
}