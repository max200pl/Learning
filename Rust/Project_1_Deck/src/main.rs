struct Deck {
    cards: Vec<Card>,
}

fn main() {
    let deck = Deck {cards: vec![]};

    println!("Heres your deck: {}", deck);
}
