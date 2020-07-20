exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // return knex("flashcards")
  //   .truncate()
  //   .then(function() {
  //     // Inserts seed entries
      return knex("flashcards").insert([
        { frontCard: "A", backCard: "a", cardTesting: "true" },
        { frontCard: "B", backCard: "b", cardTesting: "true" },
        { frontCard: "C", backCard: "c", cardTesting: "true" },
        { frontCard: "D", backCard: "d", cardTesting: "false" },
        { frontCard: "E", backCard: "e", cardTesting: "false" },
        { frontCard: "F", backCard: "f", cardTesting: "false" },
        { frontCard: "G", backCard: "g", cardTesting: "false" },
        { frontCard: "H", backCard: "h", cardTesting: "false" },
        { frontCard: "I", backCard: "i", cardTesting: "false" },
        { frontCard: "J", backCard: "j", cardTesting: "false" },
        { frontCard: "K", backCard: "k", cardTesting: "false" },
        { frontCard: "L", backCard: "l", cardTesting: "false" },
        { frontCard: "M", backCard: "m", cardTesting: "false" },
        { frontCard: "N", backCard: "n", cardTesting: "false" },
        { frontCard: "O", backCard: "o", cardTesting: "false" },
        { frontCard: "P", backCard: "p", cardTesting: "false" },
        { frontCard: "Q", backCard: "q", cardTesting: "false" },
        { frontCard: "R", backCard: "r", cardTesting: "false" },
        { frontCard: "S", backCard: "s", cardTesting: "false" },
        { frontCard: "T", backCard: "t", cardTesting: "false" },
        { frontCard: "U", backCard: "u", cardTesting: "false" },
        { frontCard: "V", backCard: "v", cardTesting: "false" },
        { frontCard: "W", backCard: "w", cardTesting: "false" },
        { frontCard: "X", backCard: "x", cardTesting: "false" },
        { frontCard: "Y", backCard: "y", cardTesting: "false" },
        { frontCard: "Z", backCard: "z", cardTesting: "false" },
        { frontCard: "•", backCard: "1", cardTesting: "true" },
        { frontCard: "• •", backCard: "2", cardTesting: "true" },
        { frontCard: "• • •", backCard: "3", cardTesting: "true" },
        { frontCard: "• • • •", backCard: "4", cardTesting: "false" },
        { frontCard: "• • • • •", backCard: "5", cardTesting: "false" },
        { frontCard: "• • • • • •", backCard: "6", cardTesting: "false" },
        { frontCard: "• • • • • • •", backCard: "7", cardTesting: "false" },
        { frontCard: "• • • • • • • •", backCard: "8", cardTesting: "false" },
        { frontCard: "• • • • • • • • •", backCard: "9", cardTesting: "false" },
        { frontCard: "• • • • • • • • • •", backCard: "10", cardTesting: "false" },
        { frontCard: "Keeps us safe, catches bad guys, responds to emergencies", backCard: "Police Officer", cardTesting: "true" },
        { frontCard: "Sells you groceries, sorts food, puts groceries in bags, puts money in register", backCard: "Grocery Store Clerk", cardTesting: "true" },
        { frontCard: "Helps kids learn, teaches rules", backCard: "Teacher", cardTesting: "true" },
        { frontCard: "Helps sick people, drives to the hospital", backCard: "Paramedic", cardTesting: "false" },
        { frontCard: "Puts out fires, rescues pets, responds to emergencies", backCard: "Firefighter", cardTesting: "false" },
        { frontCard: "Helps patients, gives us checkups", backCard: "Doctor", cardTesting: "false" },
        { frontCard: "Gives pet a checkup, helps sick pets", backCard: "Veterinarian", cardTesting: "false" },
        { frontCard: "Builds buildings, uses power tools", backCard: "Construction Worker", cardTesting: "false" },
        { frontCard: "Discovers new things, tests experiments", backCard: "Scientist", cardTesting: "false" },
        { frontCard: "Presides over court cases, keeps order", backCard: "Judge", cardTesting: "false" },
        { frontCard: "Gets passengers what they need on an airplane, ", backCard: "Flight Attendant", cardTesting: "false" },
        { frontCard: "Flies airplane, determines safest route", backCard: "Pilot", cardTesting: "false" },
        { frontCard: "Manages clients legal issues, listens to our problems", backCard: "Lawyer", cardTesting: "false" },
        { frontCard: "Takes care of teeth, checks for cavities", backCard: "Dentist", cardTesting: "false" },
        { frontCard: "Looks after books, helps us find books", backCard: "Librarian", cardTesting: "false" },
        { frontCard: "Delivers letters and packages, sorts mail", backCard: "Postman", cardTesting: "false" },
        { frontCard: "removes garbage from areas, keeps things clean", backCard: "Garbage Cleaner", cardTesting: "false" },
        { frontCard: "Installs and repairs electrical lines, checks our power", backCard: "Electrician", cardTesting: "false" },
        { frontCard: "Puts money in register, gives us change", backCard: "Cashier", cardTesting: "false" },
        { frontCard: "Deposits our money, processes withdrawals of money", backCard: "Bank Teller", cardTesting: "false" },
        { frontCard: "Helps doctor, cares for sick and young children", backCard: "Nurse", cardTesting: "false" },
        { frontCard: "Installs pipes, repairs fixtures", backCard: "Plumber", cardTesting: "false" },
        { frontCard: "Drives a bus, brings people to where they are going", backCard: "Bus Driver", cardTesting: "false" },
        { frontCard: "Does our taxes, maintains financial records", backCard: "Accountant", cardTesting: "false" },
        { frontCard: "Directs our school, monitors student success", backCard: "Principal", cardTesting: "false" },
        
        
      ]);
    // });
};