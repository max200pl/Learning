#[derive(Debug)]

struct Deck {
    cards: Vec<String>,
}

fn main() {
    // List of suits - Spades, Hearts, Diamonds, Clubs
    // List of values - 2-10, J, Q, K, A

    let suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
    let values = ["Ace", "Two", "Three"];
    let mut cards = vec![];

    for suit in suits {
        for value in values {
            println!("{} of {}", value, suit);

            let card = format!("{} of {}", value, suit);
            cards.push(card);
        }
    }

    let deck: Deck = Deck { cards };

    println!("Heres your deck: {:#?}", deck);
}
