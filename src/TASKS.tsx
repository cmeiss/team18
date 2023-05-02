import { Task } from "./interfaces/task";

export const TASKS: Task[] = [
    {
        id: 0,
        name: "Do Homework",
        description: "Get it done before the deadline.",
        status: false,
        image: require("./task-images/homework.jpg"),
        steps: ["Class 1", "Class 2"],
        difficulty: 0,
        numUsers: 0,
        time: "1800"
    },
    {
        id: 1,
        name: "Get gas",
        description: "The car needs gas.",
        status: false,
        image: require("./task-images/gas.jpg"),
        steps: ["a", "b", "c"],
        difficulty: 3,
        numUsers: 0,
        time: "1345"
    },
    {
        id: 2,
        name: "Cook dinner",
        description: "It's time for a great meal!",
        status: false,
        image: require("./task-images/cook-dinner.jpg"),
        steps: ["get ingredients", "find receipe", "cook", "clean"],
        difficulty: 3,
        numUsers: 0,
        time: "1745"
    },
    {
        id: 3,
        name: "Get breakfast",
        description: "Enjoy your morning with your favorite breakfast food!",
        status: false,
        image: require("./task-images/make-breakfast.jpg"),
        steps: ["order online", "pick up"],
        difficulty: 3,
        numUsers: 0,
        time: "700"
    },
    {
        id: 4,
        name: "Go to class",
        description: "Attend you lectures to keep up in class.",
        status: false,
        image: require("./task-images/to-class.jpg"),
        steps: [],
        difficulty: 3,
        numUsers: 0,
        time: "1130"
    },
    {
        id: 5,
        name: "Birthday Party!",
        description: "Celebrate a friend's or familiy member's big day!!",
        status: false,
        image: require("./task-images/birthday.jpg"),
        steps: [],
        difficulty: 3,
        numUsers: 0,
        time: "1130"
    },
    {
        id: 6,
        name: "Favorite Hobby Time",
        description: "Make time for what you love!",
        status: false,
        image: require("./task-images/hobby.jpg"),
        steps: [],
        difficulty: 3,
        numUsers: 0,
        time: "1130"
    },
    {
        id: 7,
        name: "Time for your Metaverse Double Life",
        description:
            "The real world not cutting it? Let the Metaverse fuel your wildest desires!",
        status: false,
        image: require("./task-images/metaverse.png"),
        steps: [],
        difficulty: 3,
        numUsers: 0,
        time: "1130"
    },
    {
        id: 8,
        name: "Research",
        description:
            "Whether your deep into the furthest reaches of AI tech, or discovering how much ketchup is the perfect amount for every fry, make time for your undiscovered knowledge!.",
        status: false,
        image: require("./task-images/research.jpg"),
        steps: [],
        difficulty: 3,
        numUsers: 0,
        time: "1130"
    },
    {
        id: 9,
        name: "Gardening",
        description: "Tend those taters!",
        status: false,
        image: require("./task-images/gardening.png"),
        steps: [],
        difficulty: 3,
        numUsers: 0,
        time: "1130"
    },
    {
        id: 10,
        name: "Dance Recital",
        description: "I like to tango.",
        status: false,
        image: require("./task-images/dance.png"),
        steps: [],
        difficulty: 3,
        numUsers: 0,
        time: "1130"
    },
    {
        id: 11,
        name: "Feed the cat",
        description: "Your pet needs food",
        status: false,
        image: require("./task-images/feedcat.jpg"),
        steps: [],
        difficulty: 3,
        numUsers: 0,
        time: "1130"
    },
    {
        id: 12,
        name: "Wash car",
        description: "Car's looking a little muddy",
        status: false,
        image: require("./task-images/carwash.jpg"),
        steps: [],
        difficulty: 3,
        numUsers: 0,
        time: "1130"
    },
    {
        id: 13,
        name: "Meet with team",
        description: "preparing for delivery to boss",
        status: false,
        image: require("./task-images/team-meeting.png"),
        steps: [],
        difficulty: 3,
        numUsers: 0,
        time: "1130"
    },
    {
        id: 14,
        name: "Study",
        description: "Get ready for your exams",
        status: false,
        image: require("./task-images/study.jpg"),
        steps: [],
        difficulty: 3,
        numUsers: 0,
        time: "1130"
    },
    {
        id: 15,
        name: "Practice violin",
        description: "The school band needs your talent",
        status: false,
        image: require("./task-images/violin.jpg"),
        steps: [],
        difficulty: 3,
        numUsers: 0,
        time: "1130"
    },
    {
        id: 16,
        name: "Clean the kitchen",
        description: "Stains. everywhere.",
        status: false,
        image: require("./task-images/clean-kitchen.png"),
        steps: [],
        difficulty: 3,
        numUsers: 0,
        time: "1130"
    },
    {
        id: 17,
        name: "Walk the dog",
        description: "Take the puppy for a walk around the park.",
        status: false,
        image: require("./task-images/walk-dog.jpg"),
        steps: [],
        difficulty: 2,
        numUsers: 0,
        time: "1130"
    },
    {
        id: 18,
        name: "Grocery shopping",
        description: "Time to refill the pantry and the fridge.",
        status: false,
        image: require("./task-images/grocery-shopping.jpg"),
        steps: [],
        difficulty: 3,
        numUsers: 0,
        time: "1130"
    },
    {
        id: 19,
        name: "Water plants",
        description: "The pothos is looking pretty droopy, give it some love.",
        status: false,
        image: require("./task-images/water-plants.png"),
        steps: [],
        difficulty: 1,
        numUsers: 0,
        time: "1130"
    },
    {
        id: 20,
        name: "Wash dishes",
        description: "Don't be that roomate, it's time to wash the dishes.",
        status: false,
        image: require("./task-images/wash-dishes.png"),
        steps: [],
        difficulty: 2,
        numUsers: 0,
        time: "1130"
    },
    {
        id: 21,
        name: "Do laundry",
        description: "Refresh your closet, wash that dirty laundry!",
        status: false,
        image: require("./task-images/laundry.png"),
        steps: [],
        difficulty: 3,
        numUsers: 0,
        time: "1130"
    },
    {
        id: 22,
        name: "Take out the trash",
        description:
            "There are flies gathering, take the trash out to the curb",
        status: false,
        image: require("./task-images/trash.jpg"),
        steps: [],
        difficulty: 1,
        numUsers: 0,
        time: "1130"
    },
    {
        id: 23,
        name: "Meditate",
        description: "relax",
        status: false,
        image: require("./task-images/meditate.jpg"),
        steps: [],
        difficulty: 3,
        numUsers: 0,
        time: "1130"
    },
    {
        id: 24,
        name: "Manifest",
        description: "what you want in life",
        status: false,
        image: require("./task-images/manifest.png"),
        steps: [],
        difficulty: 3,
        numUsers: 1,
        time: "680"
    },
    {
        id: 25,
        name: "Workout",
        description: "pump some iron",
        status: false,
        image: require("./task-images/workout.jpg"),
        steps: [],
        difficulty: 3,
        numUsers: 1,
        time: "645"
    },
    {
        id: 26,
        name: "Watch movie",
        description: "Make some popcorn and put your feet up!",
        status: false,
        image: require("./task-images/movie.png"),
        steps: [],
        difficulty: 1,
        numUsers: 1,
        time: "1045"
    },
    {
        id: 27,
        name: "Go for a run",
        description: "Run 100 miles",
        status: false,
        image: require("./task-images/run.png"),
        steps: [],
        difficulty: 69,
        numUsers: 1,
        time: "1445"
    },
    {
        id: 28,
        name: "m20 challenge",
        description: "do the m20 burger challenge",
        status: false,
        image: require("./task-images/m20.png"),
        steps: [],
        difficulty: 23,
        numUsers: 5,
        time: "675"
    }
];
