use rand::{rng, seq::SliceRandom};
#[derive(Debug)]

struct Deck {
    cards: Vec<String>,
}

//* ============= # Example 1 ============= *//
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

//* ============= # Example 2 Instance ============= *//

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

        Deck { cards } // Implicit return
    }

    fn shufflet(&mut self) {
        println!("Shuffling the deck...");

        let mut rng = rng();

        self.cards.shuffle(&mut rng);
    }

    fn deal(&mut self, num_cards: usize) -> Vec<String> {
        self.cards.split_off(self.cards.len() - num_cards)
    }
}

fn main() {
    let mut deck = Deck::new();
    // deck.shufflet();

    // Probable need to add error handling here
    // to check if the deck has enough cards to deal
    let cards = deck.deal(3);

    println!("Heres your hand: {:#?}", cards);
    println!("Heres your deck: {:#?}", deck);
}
