import { Task } from "./interfaces/task";

export const TASKS: Task[] = [
    {
        id: 0,
        name: "Homework",
        description: "Get it done before the deadline.",
        status: false,
        image: require("./task-images/homework.jpg"),
        steps: ["Sharpen pencil", "Open notepad", "Finish that homework!"],
        difficulty: 0,
        numUsers: 0,
        time: "18:00",
        pendingMode: false
    },
    {
        id: 1,
        name: "Get gas",
        description: "The car needs gas refil your tank.",
        status: false,
        image: require("./task-images/gas.jpg"),
        steps: [
            "Realize your almost empty",
            "Frantically find a gas station",
            "Fill up the tank"
        ],
        difficulty: 3,
        numUsers: 0,
        time: "13:45",
        pendingMode: false
    },
    {
        id: 2,
        name: "Cook dinner",
        description: "It's time for a great meal!",
        status: false,
        image: require("./task-images/cook-dinner.jpg"),
        steps: ["Buy ingredients", "Prep ingredients", "Stir Fry!"],
        difficulty: 3,
        numUsers: 0,
        time: "17:45",
        pendingMode: false
    },
    {
        id: 3,
        name: "Breakfast",
        description: "Enjoy your morning with your favorite breakfast food!",
        status: false,
        image: require("./task-images/make-breakfast.jpg"),
        steps: ["Blend smootie", "Eat eggs", "Devour"],
        difficulty: 3,
        numUsers: 0,
        time: "07:00",
        pendingMode: false
    },
    {
        id: 4,
        name: "Go to class",
        description: "Attend you lectures to keep up in class.",
        status: false,
        image: require("./task-images/to-class.jpg"),
        steps: ["Pack bag", "Start walking", "Learn!"],
        difficulty: 3,
        numUsers: 0,
        time: "11:30",
        pendingMode: false
    },
    {
        id: 5,
        name: "Birthday Party!",
        description: "Celebrate a friend's or familiy member's big day!!",
        status: false,
        image: require("./task-images/birthday.jpg"),
        steps: ["Buy gift", "Wrap gift", "Celebrate!"],
        difficulty: 3,
        numUsers: 0,
        time: "17:30",
        pendingMode: false
    },
    {
        id: 6,
        name: "Favorite Hobby",
        description: "Make time for what you love!",
        status: false,
        image: require("./task-images/hobby.jpg"),
        steps: [
            "Take time off",
            "Sit back and relax",
            "Enjoy your hobby of choice."
        ],
        difficulty: 3,
        numUsers: 0,
        time: "19:30",
        pendingMode: false
    },
    {
        id: 7,
        name: "Metaverse Double Life",
        description:
            "The real world not cutting it? Let the Metaverse fuel your wildest desires!",
        status: false,
        image: require("./task-images/metaverse.png"),
        steps: [],
        difficulty: 3,
        numUsers: 0,
        time: "11:30",
        pendingMode: false
    },
    {
        id: 8,
        name: "Research",
        description:
            "Whether your deep into the furthest reaches of AI tech, or discovering how much ketchup is the perfect amount for every fry, make time for your undiscovered knowledge!.",
        status: false,
        image: require("./task-images/research.jpg"),
        steps: [
            "Put on lab coat",
            "Review safety modules",
            "Don't spill any chemicals"
        ],
        difficulty: 3,
        numUsers: 0,
        time: "12:00",
        pendingMode: false
    },
    {
        id: 9,
        name: "Gardening",
        description: "Tend those taters!",
        status: false,
        image: require("./task-images/gardening.png"),
        steps: [
            "Put on gloves and overalls",
            "Repot that plant.",
            "Get hands dirty"
        ],
        difficulty: 3,
        numUsers: 0,
        time: "08:00",
        pendingMode: false
    },
    {
        id: 10,
        name: "Dance Recital",
        description: "I like to tango.",
        status: false,
        image: require("./task-images/dance.png"),
        steps: ["Get dressed up", "Drive to dance", "Have fun!"],
        difficulty: 3,
        numUsers: 0,
        time: "15:30",
        pendingMode: false
    },
    {
        id: 11,
        name: "Feed cat",
        description: "Your pet needs food",
        status: false,
        image: require("./task-images/feedcat.jpg"),
        steps: ["Grab kibble", "Pour"],
        difficulty: 3,
        numUsers: 0,
        time: "08:15",
        pendingMode: false
    },
    {
        id: 12,
        name: "Wash car",
        description: "Car's looking a little muddy",
        status: false,
        image: require("./task-images/carwash.jpg"),
        steps: ["Notice bird poop", "Groan", "Drive to carwash", "Pay up."],
        difficulty: 3,
        numUsers: 0,
        time: "08:00",
        pendingMode: false
    },
    {
        id: 13,
        name: "Team meeting",
        description: "preparing for delivery to boss",
        status: false,
        image: require("./task-images/team-meeting.png"),
        steps: [
            "Schedule meeting time",
            "Arrive",
            "Wait 15 minutes for late teammate",
            "Discuss"
        ],
        difficulty: 3,
        numUsers: 0,
        time: "11:15",
        pendingMode: false
    },
    {
        id: 14,
        name: "Study",
        description: "Get ready for your exams",
        status: false,
        image: require("./task-images/study.jpg"),
        steps: ["Grab a textbook", "Review notes", "Hope and pray"],
        difficulty: 3,
        numUsers: 0,
        time: "17:30",
        pendingMode: false
    },
    {
        id: 15,
        name: "Violin practice",
        description: "The school band needs your talent",
        status: false,
        image: require("./task-images/violin.jpg"),
        steps: ["Review sheet music", "Play"],
        difficulty: 3,
        numUsers: 0,
        time: "12:30",
        pendingMode: false
    },
    {
        id: 16,
        name: "Clean kitchen",
        description: "Stains. everywhere.",
        status: false,
        image: require("./task-images/clean-kitchen.png"),
        steps: ["Grab a bucket", "And a mop", "Get scrubing!"],
        difficulty: 3,
        numUsers: 0,
        time: "11:30",
        pendingMode: false
    },
    {
        id: 17,
        name: "Walk dog",
        description: "Take the puppy for a walk around the park.",
        status: false,
        image: require("./task-images/walk-dog.jpg"),
        steps: ["Put leash on", "Enjoy some fresh air", "Scoop poop"],
        difficulty: 2,
        numUsers: 0,
        time: "18:00",
        pendingMode: false
    },
    {
        id: 18,
        name: "Grocery shopping",
        description: "Time to refill the pantry and the fridge.",
        status: false,
        image: require("./task-images/grocery-shopping.jpg"),
        steps: ["Drive to grocery", "Grab a cart", "Hunt and gather", "Pay"],
        difficulty: 3,
        numUsers: 0,
        time: "16:30",
        pendingMode: false
    },
    {
        id: 19,
        name: "Water plants",
        description: "The pothos is looking pretty droopy, give it some love.",
        status: false,
        image: require("./task-images/water-plants.png"),
        steps: ["Fill watering can", "Water pothos", "Water hydrangea"],
        difficulty: 1,
        numUsers: 0,
        time: "08:30",
        pendingMode: false
    },
    {
        id: 20,
        name: "Wash dishes",
        description: "Don't be that roomate, it's time to wash the dishes.",
        status: false,
        image: require("./task-images/wash-dishes.png"),
        steps: ["Notice the stentch", "See the pile", "Get scrubbing!"],
        difficulty: 2,
        numUsers: 0,
        time: "09:30",
        pendingMode: false
    },
    {
        id: 21,
        name: "Laundry",
        description: "Refresh your closet, wash that dirty laundry!",
        status: false,
        image: require("./task-images/laundry.png"),
        steps: ["Load washer", "Load dryer", "Fold", "Put away"],
        difficulty: 3,
        numUsers: 0,
        time: "11:15",
        pendingMode: false
    },
    {
        id: 22,
        name: "Take out trash",
        description:
            "There are flies gathering, take the trash out to the curb",
        status: false,
        image: require("./task-images/trash.jpg"),
        steps: ["Close trash bag", "Carry to the curb"],
        difficulty: 1,
        numUsers: 0,
        time: "12:30",
        pendingMode: false
    },
    {
        id: 23,
        name: "Meditate",
        description: "relax",
        status: false,
        image: require("./task-images/meditate.jpg"),
        steps: [
            "Calm your mind",
            "Release your worries",
            "Become one with the universe"
        ],
        difficulty: 3,
        numUsers: 0,
        time: "11:30",
        pendingMode: false
    },
    {
        id: 24,
        name: "Manifest",
        description: "what you want in life",
        status: false,
        image: require("./task-images/manifest.png"),
        steps: ["Plan", "Motivate", "Acheive"],
        difficulty: 3,
        numUsers: 0,
        time: "06:30",
        pendingMode: false
    },
    {
        id: 25,
        name: "Workout",
        description: "pump some iron",
        status: false,
        image: require("./task-images/workout.jpg"),
        steps: ["Jog", "Lift", "Bench", "Enjoy protien shake"],
        difficulty: 3,
        numUsers: 0,
        time: "06:45",
        pendingMode: false
    },
    {
        id: 26,
        name: "Watch movie",
        description: "Make some popcorn and put your feet up.",
        status: false,
        image: require("./task-images/movie.png"),
        steps: ["Pop popcorn", "Put 3D in", "Watch with anticipation"],
        difficulty: 1,
        numUsers: 0,
        time: "10:45",
        pendingMode: false
    },
    {
        id: 27,
        name: "Go for a run",
        description: "Test you limits and run 100 miles!",
        status: false,
        image: require("./task-images/run.png"),
        steps: [
            "Put on favorite athleisure",
            "5 miles",
            "Act like you enjoy running (you don't)"
        ],
        difficulty: 69,
        numUsers: 0,
        time: "14:45",
        pendingMode: false
    },
    {
        id: 28,
        name: "M2O challenge",
        description:
            "Get your picture up on that wall! Do the m2o burger challenge.",
        status: false,
        image: require("./task-images/m20.png"),
        steps: [
            "Enter for the challenge",
            "15 minutes of pain",
            "You did it!",
            "Get your T-shirt"
        ],
        difficulty: 23,
        numUsers: 0,
        time: "07:00",
        pendingMode: false
    },
    {
        id: 29,
        name: "Nap",
        description: "Take a rest, you deserve it.",
        status: false,
        image: require("./task-images/nap.jpg"),
        steps: [
            "So sleepy",
            "Set alarm for 30 minutes",
            "Wake up 3 hours later"
        ],
        difficulty: 23,
        numUsers: 0,
        time: "06:45",
        pendingMode: false
    },
    {
        id: 30,
        name: "Soccer practice",
        description: "Don't be late! Time to practice before the big game.",
        status: false,
        image: require("./task-images/soccer.jpg"),
        steps: ["Grab gear", "2 hours of pain", "Shower"],
        difficulty: 23,
        numUsers: 0,
        time: "06:30",
        pendingMode: false
    }
];
