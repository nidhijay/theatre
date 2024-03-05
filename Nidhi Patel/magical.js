function calculateTicketPrice(age, showTime) {
    let ticketPrice = 20; // Default ticket price

    // Check if the guest qualifies for a discounted ticket price
    if (age < 12 || age > 65) {
        ticketPrice = 10;
    }

    // Check if the show is a matinee show
    if (showTime === 'matinee') {
        ticketPrice -= 3; // Apply additional discount for matinee show
    }

    return ticketPrice;
}

// Example usage:
const guestAge = 30; // Example guest age
const guestShowTime = 'matinee'; // Example show time

const ticketPrice = calculateTicketPrice(guestAge, guestShowTime);
console.log('Ticket Price:', ticketPrice);
