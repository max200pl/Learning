#[derive(Debug)]

struct Deck {
    cards: Vec<String>,
}

//* ============= # Example 1 =============
// fn main() {
//     // List of suits - Spades, Hearts, Diamonds, Clubs
//     // List of values - 2-10, J, Q, K, A

//     let suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
//     let values = ["Ace", "Two", "Three"];
//     let mut cards = vec![];

//     for suit in suits {
//         for value in values {
//             println!("{} of {}", value, suit);

//             let card = format!("{} of {}", value, suit);
//             cards.push(card);
//         }
//     }

//     let deck: Deck = Deck { cards };

//     println!("Heres your deck: {:#?}", deck);
// }

//* ============= # Example 2 ============= *//

impl Deck {
    fn new() -> Self {
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

        return deck;
    }
}

fn main() {
    let deck = Deck::new();

    println!("Heres your deck: {:#?}", deck);
}
